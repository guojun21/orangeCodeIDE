"use strict";

// Module: out-build/vs/platform/extensionManagement/common/extensionManagement.js
// Offset: 27599418 (bundle byte offset)
// Size: 4393 bytes
Ht();
Wt();
tnt = "^([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$";
USt = new RegExp(tnt);
vru = "__web_extension";
$St = "skipWalkthrough";
qNe = "skipPublisherTrust";
nnt = "extensionInstallSource";
Aru = "dependecyOrPackExtensionInstall";
yJg = "clientTargetPlatform";
(function (n) {
  n.COMMAND = "command";
  n.SETTINGS_SYNC = "settingsSync";
})(wJg ||= {});
(function (n) {
  n.NoneOrRelevance = "NoneOrRelevance";
  n.LastUpdatedDate = "LastUpdatedDate";
  n.Title = "Title";
  n.PublisherName = "PublisherName";
  n.InstallCount = "InstallCount";
  n.PublishedDate = "PublishedDate";
  n.AverageRating = "AverageRating";
  n.WeightedRating = "WeightedRating";
})(_Jg ||= {});
(function (n) {
  n[n.Default = 0] = "Default";
  n[n.Ascending = 1] = "Ascending";
  n[n.Descending = 2] = "Descending";
})(CJg ||= {});
(function (n) {
  n.Category = "Category";
  n.ExtensionId = "ExtensionId";
  n.ExtensionName = "ExtensionName";
  n.ExcludeWithFlags = "ExcludeWithFlags";
  n.Featured = "Featured";
  n.SearchText = "SearchText";
  n.Tag = "Tag";
  n.Target = "Target";
})(SJg ||= {});
(function (n) {
  n.Install = "install";
  n.Uninstall = "uninstall";
})(kJg ||= {});
(function (n) {
  n[n.None = 1] = "None";
  n[n.Install = 2] = "Install";
  n[n.Update = 3] = "Update";
  n[n.Migrate = 4] = "Migrate";
})(EJg ||= {});
yE = xi("extensionGalleryService");
(function (n) {
  n.Timeout = "Timeout";
  n.Cancelled = "Cancelled";
  n.Failed = "Failed";
  n.DownloadFailedWriting = "DownloadFailedWriting";
  n.Offline = "Offline";
})(xJg ||= {});
fmn = class extends Error {
  constructor(n, e) {
    super(n);
    this.code = e;
    this.name = e;
  }
};
(function (n) {
  n.NotFound = "NotFound";
  n.Unsupported = "Unsupported";
  n.Deprecated = "Deprecated";
  n.Malicious = "Malicious";
  n.Incompatible = "Incompatible";
  n.IncompatibleApi = "IncompatibleApi";
  n.IncompatibleTargetPlatform = "IncompatibleTargetPlatform";
  n.ReleaseVersionNotFound = "ReleaseVersionNotFound";
  n.Invalid = "Invalid";
  n.Download = "Download";
  n.DownloadSignature = "DownloadSignature";
  n.DownloadFailedWriting = "DownloadFailedWriting";
  n.UpdateMetadata = "UpdateMetadata";
  n.Extract = "Extract";
  n.Scanning = "Scanning";
  n.ScanningExtension = "ScanningExtension";
  n.ReadRemoved = "ReadRemoved";
  n.UnsetRemoved = "UnsetRemoved";
  n.Delete = "Delete";
  n.Rename = "Rename";
  n.IntializeDefaultProfile = "IntializeDefaultProfile";
  n.AddToProfile = "AddToProfile";
  n.InstalledExtensionNotFound = "InstalledExtensionNotFound";
  n.PostInstall = "PostInstall";
  n.CorruptZip = "CorruptZip";
  n.IncompleteZip = "IncompleteZip";
  n.PackageNotSigned = "PackageNotSigned";
  n.SignatureVerificationInternal = "SignatureVerificationInternal";
  n.SignatureVerificationFailed = "SignatureVerificationFailed";
  n.NotAllowed = "NotAllowed";
  n.Gallery = "Gallery";
  n.Cancelled = "Cancelled";
  n.Unknown = "Unknown";
  n.Internal = "Internal";
})(TJg ||= {});
(function (n) {
  n.NotSigned = "NotSigned";
  n.Success = "Success";
  n.RequiredArgumentMissing = "RequiredArgumentMissing";
  n.InvalidArgument = "InvalidArgument";
  n.PackageIsUnreadable = "PackageIsUnreadable";
  n.UnhandledException = "UnhandledException";
  n.SignatureManifestIsMissing = "SignatureManifestIsMissing";
  n.SignatureManifestIsUnreadable = "SignatureManifestIsUnreadable";
  n.SignatureIsMissing = "SignatureIsMissing";
  n.SignatureIsUnreadable = "SignatureIsUnreadable";
  n.CertificateIsUnreadable = "CertificateIsUnreadable";
  n.SignatureArchiveIsUnreadable = "SignatureArchiveIsUnreadable";
  n.FileAlreadyExists = "FileAlreadyExists";
  n.SignatureArchiveIsInvalidZip = "SignatureArchiveIsInvalidZip";
  n.SignatureArchiveHasSameSignatureFile = "SignatureArchiveHasSameSignatureFile";
  n.PackageIntegrityCheckFailed = "PackageIntegrityCheckFailed";
  n.SignatureIsInvalid = "SignatureIsInvalid";
  n.SignatureManifestIsInvalid = "SignatureManifestIsInvalid";
  n.SignatureIntegrityCheckFailed = "SignatureIntegrityCheckFailed";
  n.EntryIsMissing = "EntryIsMissing";
  n.EntryIsTampered = "EntryIsTampered";
  n.Untrusted = "Untrusted";
  n.CertificateRevoked = "CertificateRevoked";
  n.SignatureIsNotValid = "SignatureIsNotValid";
  n.UnknownError = "UnknownError";
  n.PackageIsInvalidZip = "PackageIsInvalidZip";
  n.SignatureArchiveHasTooManyEntries = "SignatureArchiveHasTooManyEntries";
})(yru ||= {});
Y3 = class extends Error {
  constructor(n, e) {
    super(n);
    this.code = e;
    this.name = e;
  }
};
CS = xi("extensionManagementService");
O$e = "extensionsIdentifiers/disabled";
wru = "extensionsIdentifiers/enabled";
qSt = xi("IGlobalExtensionEnablementService");
Jfa = xi("IExtensionTipsService");
yU = xi("IAllowedExtensionsService");
bL = dt(1943, "Extensions");
_ru = dt(1944, "Preferences");
Cru = "extensions.gallery.useUnpkgResourceApi";
HSt = "extensions.allowed";
