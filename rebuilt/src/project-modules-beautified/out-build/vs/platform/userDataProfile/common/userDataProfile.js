"use strict";

// Module: out-build/vs/platform/userDataProfile/common/userDataProfile.js
// Offset: 936523 (bundle byte offset)
// Size: 10387 bytes
iw();
yn();
rt();
Yr();
Yn();
Ht();
qg();
ns();
Wt();
jr();
ps();
_d();
vr();
Bc();
oa();
Js();
(function (n) {
  n.Settings = "settings";
  n.Keybindings = "keybindings";
  n.Snippets = "snippets";
  n.Prompts = "prompts";
  n.Tasks = "tasks";
  n.Extensions = "extensions";
  n.GlobalState = "globalState";
})(shh ||= {});
KA = xi("IUserDataProfilesService");
eEc = class extends at {
  static {
    this.PROFILES_KEY = "userDataProfiles";
  }
  static {
    this.PROFILE_ASSOCIATIONS_KEY = "profileAssociations";
  }
  get defaultProfile() {
    return this.profiles[0];
  }
  get profiles() {
    return [...this.profilesObject.profiles, ...this.transientProfilesObject.profiles];
  }
  constructor(e, t, i, r) {
    super();
    this.environmentService = e;
    this.fileService = t;
    this.uriIdentityService = i;
    this.logService = r;
    this._onDidChangeProfiles = this._register(new Qe());
    this.onDidChangeProfiles = this._onDidChangeProfiles.event;
    this._onWillCreateProfile = this._register(new Qe());
    this.onWillCreateProfile = this._onWillCreateProfile.event;
    this._onWillRemoveProfile = this._register(new Qe());
    this.onWillRemoveProfile = this._onWillRemoveProfile.event;
    this._onDidResetWorkspaces = this._register(new Qe());
    this.onDidResetWorkspaces = this._onDidResetWorkspaces.event;
    this.profileCreationPromises = new Map();
    this.transientProfilesObject = {
      profiles: [],
      emptyWindows: new Map()
    };
    this.profilesHome = Wo(this.environmentService.userRoamingDataHome, "profiles");
    this.profilesCacheHome = Wo(this.environmentService.cacheHome, "CachedProfilesData");
  }
  init() {
    this._profilesObject = undefined;
  }
  get profilesObject() {
    if (!this._profilesObject) {
      const e = this.createDefaultProfile();
      const t = [e];
      try {
        for (const r of this.getStoredProfiles()) {
          if (!r.name || !Qo(r.name) || !r.location) {
            this.logService.warn("Skipping the invalid stored profile", r.location || r.name);
            continue;
          }
          t.push(AOt(ca(r.location), r.name, r.location, this.profilesCacheHome, {
            icon: r.icon,
            useDefaultFlags: r.useDefaultFlags
          }, e));
        }
      } catch (r) {
        this.logService.error(r);
      }
      const i = new Map();
      if (t.length) {
        try {
          const r = this.getStoredProfileAssociations();
          if (r.workspaces) {
            for (const [s, o] of Object.entries(r.workspaces)) {
              const a = je.parse(s);
              const l = t.find(u => u.id === o);
              if (l) {
                const u = l.workspaces ? l.workspaces.slice(0) : [];
                u.push(a);
                l.workspaces = u;
              }
            }
          }
          if (r.emptyWindows) {
            for (const [s, o] of Object.entries(r.emptyWindows)) {
              const a = t.find(l => l.id === o);
              if (a) {
                i.set(s, a);
              }
            }
          }
        } catch (r) {
          this.logService.error(r);
        }
      }
      this._profilesObject = {
        profiles: t,
        emptyWindows: i
      };
    }
    return this._profilesObject;
  }
  createDefaultProfile() {
    const e = AOt("__default__profile__", _(2628, null), this.environmentService.userRoamingDataHome, this.profilesCacheHome);
    return {
      ...e,
      extensionsResource: this.getDefaultProfileExtensionsLocation() ?? e.extensionsResource,
      isDefault: true
    };
  }
  async createTransientProfile(e) {
    const t = "Temp";
    const i = new RegExp(`${UI(t)}\\s(\\d+)`);
    let r = 0;
    for (const o of this.profiles) {
      const a = i.exec(o.name);
      const l = a ? parseInt(a[1]) : 0;
      r = l > r ? l : r;
    }
    const s = `${t} ${r + 1}`;
    return this.createProfile(VC(Wr()).toString(16), s, {
      transient: true
    }, e);
  }
  async createNamedProfile(e, t, i) {
    return this.createProfile(VC(Wr()).toString(16), e, t, i);
  }
  async createProfile(e, t, i, r) {
    return await this.doCreateProfile(e, t, i, r);
  }
  async doCreateProfile(e, t, i, r) {
    if (!Qo(t) || !t) {
      throw new Error("Name of the profile is mandatory and must be of type `string`");
    }
    let s = this.profileCreationPromises.get(t);
    if (!s) {
      s = (async () => {
        try {
          if (this.profiles.find(d => d.id === e || !d.isTransient && !i?.transient && d.name === t)) {
            throw new Error(`Profile with ${t} name already exists`);
          }
          const a = r ? this.getWorkspace(r) : undefined;
          if (je.isUri(a)) {
            i = {
              ...i,
              workspaces: [a]
            };
          }
          const l = AOt(e, t, Wo(this.profilesHome, e), this.profilesCacheHome, i, this.defaultProfile);
          await this.fileService.createFolder(l.location);
          const u = [];
          this._onWillCreateProfile.fire({
            profile: l,
            join(d) {
              u.push(d);
            }
          });
          await ib.settled(u);
          if (a && !je.isUri(a)) {
            this.updateEmptyWindowAssociation(a, l, !!l.isTransient);
          }
          this.updateProfiles([l], [], []);
          return l;
        } finally {
          this.profileCreationPromises.delete(t);
        }
      })();
      this.profileCreationPromises.set(t, s);
    }
    return s;
  }
  async updateProfile(e, t) {
    const i = [];
    for (const s of this.profiles) {
      let o;
      if (e.id === s.id) {
        if (s.isDefault) {
          if (t.workspaces) {
            o = s;
            o.workspaces = t.workspaces;
          }
        } else {
          o = AOt(s.id, t.name ?? s.name, s.location, this.profilesCacheHome, {
            icon: t.icon === null ? undefined : t.icon ?? s.icon,
            transient: t.transient ?? s.isTransient,
            useDefaultFlags: t.useDefaultFlags ?? s.useDefaultFlags,
            workspaces: t.workspaces ?? s.workspaces
          }, this.defaultProfile);
        }
      } else if (t.workspaces) {
        const a = s.workspaces?.filter(l => !t.workspaces?.some(u => this.uriIdentityService.extUri.isEqual(l, u)));
        if (s.workspaces?.length !== a?.length) {
          o = s;
          o.workspaces = a;
        }
      }
      if (o) {
        i.push(o);
      }
    }
    if (!i.length) {
      throw e.isDefault ? new Error("Cannot update default profile") : new Error(`Profile '${e.name}' does not exist`);
    }
    this.updateProfiles([], [], i);
    const r = this.profiles.find(s => s.id === e.id);
    if (!r) {
      throw new Error(`Profile '${e.name}' was not updated`);
    }
    return r;
  }
  async removeProfile(e) {
    if (e.isDefault) {
      throw new Error("Cannot remove default profile");
    }
    const t = this.profiles.find(r => r.id === e.id);
    if (!t) {
      throw new Error(`Profile '${e.name}' does not exist`);
    }
    const i = [];
    this._onWillRemoveProfile.fire({
      profile: t,
      join(r) {
        i.push(r);
      }
    });
    try {
      await Promise.allSettled(i);
    } catch (r) {
      this.logService.error(r);
    }
    this.updateProfiles([], [t], []);
    try {
      await this.fileService.del(t.cacheHome, {
        recursive: true
      });
    } catch (r) {
      if (Loe(r) !== 1) {
        this.logService.error(r);
      }
    }
  }
  async setProfileForWorkspace(e, t) {
    const i = this.profiles.find(s => s.id === t.id);
    if (!i) {
      throw new Error(`Profile '${t.name}' does not exist`);
    }
    const r = this.getWorkspace(e);
    if (je.isUri(r)) {
      const s = i.workspaces ? [...i.workspaces] : [];
      if (!s.some(o => this.uriIdentityService.extUri.isEqual(o, r))) {
        s.push(r);
        await this.updateProfile(i, {
          workspaces: s
        });
      }
    } else {
      this.updateEmptyWindowAssociation(r, i, false);
      this.updateStoredProfiles(this.profiles);
    }
  }
  unsetWorkspace(e, t = false) {
    const i = this.getWorkspace(e);
    if (je.isUri(i)) {
      const r = this.getProfileForWorkspace(e);
      if (r) {
        this.updateProfile(r, {
          workspaces: r.workspaces?.filter(s => !this.uriIdentityService.extUri.isEqual(s, i))
        });
      }
    } else {
      this.updateEmptyWindowAssociation(i, undefined, t);
      this.updateStoredProfiles(this.profiles);
    }
  }
  async resetWorkspaces() {
    this.transientProfilesObject.emptyWindows.clear();
    this.profilesObject.emptyWindows.clear();
    for (const e of this.profiles) {
      e.workspaces = undefined;
    }
    this.updateProfiles([], [], this.profiles);
    this._onDidResetWorkspaces.fire();
  }
  async cleanUp() {
    if (await this.fileService.exists(this.profilesHome)) {
      const e = await this.fileService.resolve(this.profilesHome);
      await Promise.all((e.children || []).filter(t => t.isDirectory && this.profiles.every(i => !this.uriIdentityService.extUri.isEqual(i.location, t.resource))).map(t => this.fileService.del(t.resource, {
        recursive: true
      })));
    }
  }
  async cleanUpTransientProfiles() {
    const e = this.transientProfilesObject.profiles.filter(t => !this.isProfileAssociatedToWorkspace(t));
    await Promise.allSettled(e.map(t => this.removeProfile(t)));
  }
  getProfileForWorkspace(e) {
    const t = this.getWorkspace(e);
    if (je.isUri(t)) {
      return this.profiles.find(i => i.workspaces?.some(r => this.uriIdentityService.extUri.isEqual(r, t)));
    } else {
      return this.profilesObject.emptyWindows.get(t) ?? this.transientProfilesObject.emptyWindows.get(t);
    }
  }
  getWorkspace(e) {
    if (oE(e)) {
      return e.uri;
    } else if (zD(e)) {
      return e.configPath;
    } else {
      return e.id;
    }
  }
  isProfileAssociatedToWorkspace(e) {
    return !!e.workspaces?.length || !![...this.profilesObject.emptyWindows.values()].some(t => this.uriIdentityService.extUri.isEqual(t.location, e.location)) || !![...this.transientProfilesObject.emptyWindows.values()].some(t => this.uriIdentityService.extUri.isEqual(t.location, e.location));
  }
  updateProfiles(e, t, i) {
    const r = [...this.profiles, ...e];
    const s = this.transientProfilesObject.profiles;
    this.transientProfilesObject.profiles = [];
    const o = [];
    for (let a of r) {
      if (t.some(l => a.id === l.id)) {
        for (const l of [...this.profilesObject.emptyWindows.keys()]) {
          if (a.id === this.profilesObject.emptyWindows.get(l)?.id) {
            this.profilesObject.emptyWindows.delete(l);
          }
        }
        continue;
      }
      if (!a.isDefault) {
        a = i.find(u => a.id === u.id) ?? a;
        const l = s.find(u => a.id === u.id);
        if (a.isTransient) {
          this.transientProfilesObject.profiles.push(a);
        } else if (l) {
          for (const [u, d] of this.transientProfilesObject.emptyWindows.entries()) {
            if (a.id === d.id) {
              this.transientProfilesObject.emptyWindows.delete(u);
              this.profilesObject.emptyWindows.set(u, a);
              break;
            }
          }
        }
      }
      if (a.workspaces?.length === 0) {
        a.workspaces = undefined;
      }
      o.push(a);
    }
    this.updateStoredProfiles(o);
    this.triggerProfilesChanges(e, t, i);
  }
  triggerProfilesChanges(e, t, i) {
    this._onDidChangeProfiles.fire({
      added: e,
      removed: t,
      updated: i,
      all: this.profiles
    });
  }
  updateEmptyWindowAssociation(e, t, i) {
    i = t?.isTransient ? true : i;
    if (i) {
      if (t) {
        this.transientProfilesObject.emptyWindows.set(e, t);
      } else {
        this.transientProfilesObject.emptyWindows.delete(e);
      }
    } else {
      this.transientProfilesObject.emptyWindows.delete(e);
      if (t) {
        this.profilesObject.emptyWindows.set(e, t);
      } else {
        this.profilesObject.emptyWindows.delete(e);
      }
    }
  }
  updateStoredProfiles(e) {
    const t = [];
    const i = {};
    const r = {};
    for (const s of e) {
      if (!s.isTransient && (s.isDefault || t.push({
        location: s.location,
        name: s.name,
        icon: s.icon,
        useDefaultFlags: s.useDefaultFlags
      }), s.workspaces)) {
        for (const o of s.workspaces) {
          i[o.toString()] = s.id;
        }
      }
    }
    for (const [s, o] of this.profilesObject.emptyWindows.entries()) {
      r[s.toString()] = o.id;
    }
    this.saveStoredProfileAssociations({
      workspaces: i,
      emptyWindows: r
    });
    this.saveStoredProfiles(t);
    this._profilesObject = undefined;
  }
  getStoredProfiles() {
    return [];
  }
  saveStoredProfiles(e) {
    throw new Error("not implemented");
  }
  getStoredProfileAssociations() {
    return {};
  }
  saveStoredProfileAssociations(e) {
    throw new Error("not implemented");
  }
  getDefaultProfileExtensionsLocation() {}
};
eEc = __decorate([__param(0, lg), __param(1, Gr), __param(2, xl), __param(3, Rr)], eEc);
