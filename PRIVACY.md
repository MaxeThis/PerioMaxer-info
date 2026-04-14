# PerioMaxer — Privacy Policy

**Effective Date:** April 14, 2026
**Last Updated:** April 14, 2026

This Privacy Policy describes how the developer of PerioMaxer ("Developer," "we," "us," or "our") handles information in connection with the PerioMaxer application ("App"), available on iOS and macOS via the Apple App Store.

By using the App, you agree to the practices described in this Privacy Policy.

---

## 1. Our Core Commitment

**PerioMaxer is designed with privacy at its foundation. We do not collect, transmit, store, or have access to any of your data.** All data remains exclusively on your device, under your control.

---

## 2. Information We Do NOT Collect

We want to be clear about what we do **not** do. The Developer does **not** collect, receive, access, store, process, or transmit:

- Patient names, dates of birth, or any patient demographic information.
- Periodontal charting data, clinical measurements, or examination records.
- Protected health information (PHI) of any kind.
- Voice recordings or audio data.
- Speech recognition transcriptions.
- Biometric data (Face ID, fingerprints).
- Device identifiers, IP addresses, or hardware information.
- Location data.
- Usage analytics, behavioral data, or interaction logs.
- Crash reports (automatic).
- Cookies, tracking pixels, or advertising identifiers.

**We have zero access to any data you enter into the App.**

---

## 3. Data Stored on Your Device

The App stores the following data **locally on your device only**:

### 3.1 Patient and Clinical Data

- Patient names and dates of birth.
- Periodontal examination records, including probing depths, gingival margins, bleeding on probing, suppuration, plaque, furcation involvement, tooth mobility, and related clinical measurements.
- Exam dates, examiner names, and chart notes.

This data is stored using Apple's SwiftData framework with AES-256-GCM encryption at rest. Encryption keys are stored in the device's secure Keychain.

### 3.2 Authentication Data

- A locally stored PIN (encrypted).
- Face ID configuration (managed entirely by Apple's LocalAuthentication framework — the Developer never accesses biometric data).

### 3.3 Audit Log

- A tamper-evident log of user actions (logins, chart creation, edits, deletions) with timestamps and cryptographic hash chains for integrity verification.

### 3.4 App Preferences

- User settings and preferences (e.g., charting mode, voice control settings, display preferences).
- Subscription status (verified locally via Apple's StoreKit framework).

**None of the above data ever leaves your device through the App.**

---

## 4. Voice and Speech Data

The App offers voice-controlled charting using Apple's native on-device speech recognition framework (`SFSpeechRecognizer`).

- **On-device processing only.** The App explicitly requires on-device recognition (`requiresOnDeviceRecognition = true`). Audio is never sent to Apple's servers or any third party.
- **No recording.** The App does not record, store, or retain any audio. Voice data is processed in real time and discarded immediately after transcription.
- **No transmission.** No audio or transcription data is transmitted to the Developer or any external service.

---

## 5. Biometric Data

The App supports Face ID for authentication through Apple's LocalAuthentication framework.

- Biometric data is processed and stored entirely by Apple's Secure Enclave on your device.
- The Developer never receives, accesses, processes, or stores any biometric data.
- You can enable or disable biometric authentication at any time within the App or through your device settings.

---

## 6. Subscription and Payment Data

Subscriptions are managed entirely by Apple through the App Store.

- The Developer does not collect, process, or store any payment information, including credit card numbers, billing addresses, or Apple ID credentials.
- The App verifies subscription status locally using Apple's StoreKit 2 framework.
- Purchase history and billing are managed by Apple and subject to [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

---

## 7. Bug Reports

The App includes an optional bug report feature that allows you to send feedback via email.

- Bug reports are **entirely voluntary and user-initiated**. The App never sends information automatically.
- When you submit a bug report, it opens your device's native email client. You control the content of the email before sending.
- Bug reports are sent to: maxethis@gmail.com
- We recommend that you **never include patient data or PHI** in bug reports.

---

## 8. Third-Party Services

The App does **not** integrate with any third-party services, including:

- No analytics platforms (Google Analytics, Firebase Analytics, Mixpanel, etc.).
- No crash reporting services (Crashlytics, Sentry, Bugsnag, etc.).
- No advertising networks or ad trackers.
- No social media integrations.
- No cloud storage or sync services (iCloud, Google Drive, Dropbox, etc.).
- No external APIs or web services.

The only third-party interaction is with **Apple's App Store** for subscription management, which is governed by Apple's own privacy policy.

---

## 9. Data Security

While the Developer does not have access to your data, the App implements the following on-device security measures:

- **Encryption at rest.** All patient data is encrypted using AES-256-GCM.
- **Secure key storage.** Encryption keys are stored in the device's Keychain.
- **Authentication.** Access to the App requires PIN or Face ID authentication.
- **Auto-lock.** The App automatically locks after a configurable period of inactivity (default: 10 minutes).
- **Audit trail.** All actions are logged in a tamper-evident log with cryptographic hash chains.

**Your responsibility:** You are responsible for maintaining the physical security of your device, keeping your operating system up to date, and configuring appropriate device-level security settings (passcode, encryption, remote wipe, etc.).

---

## 10. Data Retention and Deletion

### 10.1 Data Retention

All data is stored on your device for as long as the App is installed and you choose to retain it. The Developer has no ability to access, retain, or delete your data.

### 10.2 Data Deletion

- You can delete individual patient records and charts within the App at any time.
- Uninstalling the App will remove all App data from your device.
- The Developer cannot recover data after deletion.

### 10.3 Subscription Expiration

If your subscription expires, data previously entered remains on your device. Access to certain App features may be restricted, but your data is not deleted.

---

## 11. Children's Privacy

The App is not intended for use by individuals under the age of 18. We do not knowingly collect information from children. The App is designed exclusively for licensed dental professionals and their authorized staff.

---

## 12. HIPAA Compliance

### 12.1 Your Obligations

If you are subject to HIPAA, you are solely responsible for ensuring that your use of the App complies with HIPAA requirements, including the Privacy Rule, Security Rule, and Breach Notification Rule.

### 12.2 Developer's Status

Because the Developer does not create, receive, maintain, or transmit protected health information on behalf of any covered entity, the Developer is **not** a Business Associate under HIPAA. No Business Associate Agreement (BAA) is required or provided.

### 12.3 On-Device Architecture

The App's architecture — with all data stored and processed locally on your device, no cloud connectivity, and no data transmission — is designed to support your HIPAA compliance efforts. However, HIPAA compliance depends on your overall practices, not solely on the App.

---

## 13. International Users

If you are located outside the United States:

- All data remains on your device and is not transferred internationally by the App.
- You are responsible for compliance with applicable data protection laws in your jurisdiction, including the GDPR, PIPEDA, or other applicable regulations.
- The App does not transfer any data to the Developer or across international borders.

---

## 14. Your Rights

Because the Developer does not collect or store any personal data:

- **Access requests.** There is no data held by the Developer to access.
- **Deletion requests.** There is no data held by the Developer to delete. You can delete all data locally on your device.
- **Data portability.** All data is stored on your device. The Developer does not hold any copies.
- **Opt-out.** There is no data collection to opt out of.

If you have questions about data stored on your device, you can review it within the App.

---

## 15. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. Changes will be posted at this URL with an updated "Last Updated" date. Your continued use of the App after any changes constitutes your acceptance of the updated Privacy Policy. We encourage you to review this Privacy Policy periodically.

---

## 16. Contact

If you have questions about this Privacy Policy, you may contact us at:

**Email:** maxethis@gmail.com

---

*This Privacy Policy was last updated on April 14, 2026.*
