# ChromaProof — Objective, Tamper-Evident Field Drug-Test Recording

> **Tagline:** "Making field test results objective, traceable and court-ready."

ChromaProof is a mobile-first evidence integrity system that works alongside existing colorimetric field drug-test kits (such as Marquis, Scott, and Duquenois-Levine). It transforms subjective visual readings into calibrated, timestamped, and cryptographically signed digital records.

---

## 🎙️ Presentation / Pitch Script

*(Use this balanced technical script for project demonstrations, hackathon presentations, or stakeholder briefings.)*

---

### **1. Introduction (The Problem)**
> *"Good morning, everyone. Traditional field drug testing relies heavily on the officer’s visual observation under unpredictable ambient lighting—such as streetlights, low light, or direct glare. Because human color perception varies and paper logs lack digital proof, these presumptive readings are frequently challenged in court due to subjective interpretation and chain-of-custody gaps."*

---

### **2. The Solution (What ChromaProof Does)**
> *"ChromaProof solves this problem by bringing scientific calibration and cryptographic security to frontline field testing—without requiring expensive custom hardware. Using standard smartphones and existing test kits, ChromaProof captures the chemical reaction alongside a standardized 24-patch reference color card, converting subjective color changes into court-admissible digital evidence."*

---

### **3. Core Features & Architecture**

* **Guided Optical Acquisition:**  
  > *"First, the camera interface uses OpenCV computer vision to detect the reference card, lock exposure, and verify that the photo is free from specular glare or motion blur."*

* **CIELAB & $\Delta E_{2000}$ Color Calibration:**  
  > *"Second, it converts raw pixel data into the illumination-independent CIELAB color space. It then calculates the mathematical color difference—known as $\Delta E_{2000}$—comparing the reagent spot against verified laboratory reference curves."*

* **Dual-Engine Classification & Safety Shield:**  
  > *"Third, a TensorFlow Lite neural network provides a second opinion. Crucially, if confidence falls below 85% or lighting is poor, ChromaProof automatically flags the result as **Inconclusive**. The system prioritizes safety and never forces a binary guess under ambiguous conditions."*

* **Cryptographic Attestation & Chain of Custody:**  
  > *"Fourth, the image is hashed using SHA-256 and signed with an ECDSA P-256 private key stored inside the phone's hardware secure enclave. Each record embeds UTC timestamps, GPS coordinates, and officer identification into an unforgeable digital seal."*

* **Offline-First Resilience:**  
  > *"Finally, the system stores all logs in an encrypted SQLCipher local database. Field officers can operate 100% offline in cell deadzones, and the record automatically synchronizes to a central audit database when network coverage returns."*

---

### **4. Impact & Legal Compliance**
> *"ChromaProof bridge field enforcement, forensic laboratories, and courts. It complies with modern digital evidence standards—such as Section 63 of Bharatiya Sakshya Adhiniyam, 2023—providing an auditable digital chain of custody while keeping hardware costs at zero."*

---

### **5. Closing Statutory Disclaimer**
> *"In summary, ChromaProof delivers objective measurement, cryptographic integrity, and end-to-end traceability. Please note: ChromaProof produces a presumptive field-test result with a supporting digital record and does not replace laboratory confirmatory testing (such as GC-MS)."*

---

## 🛠️ Technology Stack

* **Frontend & UI:** React 19, Vite, Tailwind CSS v4, Lucide Icons, Framer Motion
* **Mobile Client Stack:** Flutter, OpenCV C++, TensorFlow Lite (MobileNet), SQLCipher, Android Keystore
* **Backend API:** FastAPI (Python 3.11), mTLS, PostgreSQL 16
* **Cryptographic Standards:** NIST FIPS 180-4 (SHA-256), NIST FIPS 186-5 (ECDSA P-256), RFC 3161 (TSP)

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Start Vite local development server
npm run dev

# Build production bundle
npm run build
```
