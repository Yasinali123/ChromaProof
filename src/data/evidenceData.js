export const INITIAL_EVIDENCE_RECORDS = [
  {
    id: "CP-2026-000184",
    timestamp: "2026-09-30 18:42:11 IST",
    officer: "OP-0148",
    unit: "NCB Regional Field Unit 4",
    kitProfile: "MARQUIS-V2.1",
    substanceTested: "Suspected Amphetamine derivative",
    result: "NEGATIVE",
    confidence: 96.8,
    deltaE: 3.42,
    integrity: "VERIFIED",
    syncStatus: "SYNCED",
    imageHash: "a91f3c8e7b2d5a1f4e90c8b7a6f5e4d3c2b1a099887766554433221100fce7c42",
    signature: "304402207b1a...8e2f02204c3d...ecdsa_p256",
    gps: { lat: "22.8046° N", lng: "86.2029° E", accuracy: "± 2.4m" },
    timeline: [
      { time: "18:42:08.102", event: "IMAGE CAPTURED", detail: "Resolution 3840x2160, Exposure: EV -0.2" },
      { time: "18:42:09.340", event: "COLOUR CALIBRATED", detail: "ArUco 24-patch card detected, CIELAB corrected" },
      { time: "18:42:10.015", event: "RESULT CLASSIFIED", detail: "ΔE2000 = 3.42 (Threshold > 12.0), TFLite CNN = 0.968" },
      { time: "18:42:11.200", event: "HASH GENERATED", detail: "SHA-256 Digest calculated on raw image + EXIF" },
      { time: "18:42:11.450", event: "SIGNATURE CREATED", detail: "Hardware Keystore ECDSA P-256 Signed" },
      { time: "18:42:15.890", event: "SERVER SYNCED", detail: "TLS 1.3 Post-Quantum Hybrid Handshake to Central Audit DB" }
    ],
    calibrationDetails: {
      illuminant: "D65 (Normalized)",
      patchesDetected: "24/24",
      wbFactor: "R:1.02 G:1.00 B:0.97",
      reagentRegion: "Bounding Box [X:142, Y:280, W:64, H:64]"
    }
  },
  {
    id: "CP-2026-000183",
    timestamp: "2026-09-30 18:37:04 IST",
    officer: "OP-0148",
    unit: "NCB Regional Field Unit 4",
    kitProfile: "SCOTT-V1.4",
    substanceTested: "White Crystalline Powder",
    result: "INCONCLUSIVE",
    confidence: 61.2,
    deltaE: 8.75,
    integrity: "VERIFIED",
    syncStatus: "SYNCED",
    imageHash: "7b4c9a8e1f2d3c4b5a6f7e8d9c0b1a2f3e4d5c6b7a8f9e0d1c2b3a4f5e6d7c8b",
    signature: "3045022100a1...9f8e02203b2c...ecdsa_p256",
    gps: { lat: "22.8012° N", lng: "86.2055° E", accuracy: "± 4.1m" },
    reasons: ["GLARE_DETECTED_PATCH_04", "LOW_CONTRAST_REAGENT", "LIGHTING_VARIANCE_EXCEEDS_15%"],
    timeline: [
      { time: "18:37:01.050", event: "IMAGE CAPTURED", detail: "High ambient sodium vapor lighting detected" },
      { time: "18:37:02.120", event: "COLOUR CALIBRATED", detail: "Reference card patch 4 specular glare penalty applied" },
      { time: "18:37:03.400", event: "RESULT CLASSIFIED", detail: "Confidence 61.2% below safety threshold (85.0%) -> FORCED INCONCLUSIVE" },
      { time: "18:37:04.010", event: "HASH GENERATED", detail: "SHA-256 Digest calculated" },
      { time: "18:37:04.250", event: "SIGNATURE CREATED", detail: "Hardware Keystore ECDSA P-256 Signed" },
      { time: "18:37:08.500", event: "SERVER SYNCED", detail: "Stored as Presumptive Inconclusive Record" }
    ],
    calibrationDetails: {
      illuminant: "A (Incandescent/Sodium Shift)",
      patchesDetected: "22/24 (2 Obscured by Specular Glare)",
      wbFactor: "R:1.28 G:1.00 B:0.76",
      reagentRegion: "Bounding Box [X:150, Y:295, W:60, H:60]"
    }
  },
  {
    id: "CP-2026-000182",
    timestamp: "2026-09-30 18:21:49 IST",
    officer: "OP-0132",
    unit: "Customs Narcotics Intelligence Div",
    kitProfile: "DUQUENOIS-LEVINE-V3.0",
    substanceTested: "Organic Plant Material Extract",
    result: "POSITIVE",
    confidence: 94.1,
    deltaE: 18.64,
    integrity: "VERIFIED",
    syncStatus: "SYNCED",
    imageHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    signature: "304402205a2b...7c8d02201e2f...ecdsa_p256",
    gps: { lat: "22.8105° N", lng: "86.1988° E", accuracy: "± 1.8m" },
    timeline: [
      { time: "18:21:44.200", event: "IMAGE CAPTURED", detail: "Macro lens mode active" },
      { time: "18:21:46.010", event: "COLOUR CALIBRATED", detail: "Violet/Purple Chromatic Shift detected in Chloroform layer" },
      { time: "18:21:47.890", event: "RESULT CLASSIFIED", detail: "ΔE2000 = 18.64 against THC reference curve. TFLite CNN = 0.941" },
      { time: "18:21:49.100", event: "HASH GENERATED", detail: "SHA-256 Digest calculated" },
      { time: "18:21:49.350", event: "SIGNATURE CREATED", detail: "ECDSA Hardware Signed" },
      { time: "18:21:53.000", event: "SERVER SYNCED", detail: "High-Priority Notification Logged" }
    ],
    calibrationDetails: {
      illuminant: "D65 (Daylight)",
      patchesDetected: "24/24",
      wbFactor: "R:0.99 G:1.00 B:1.01",
      reagentRegion: "Bounding Box [X:160, Y:310, W:70, H:70]"
    }
  },
  {
    id: "CP-2026-000181",
    timestamp: "2026-09-30 17:55:12 IST",
    officer: "OP-0132",
    unit: "Customs Narcotics Intelligence Div",
    kitProfile: "MARQUIS-V2.1",
    substanceTested: "Unknown Powder Sample",
    result: "NEGATIVE",
    confidence: 98.2,
    deltaE: 1.85,
    integrity: "VERIFIED",
    syncStatus: "SYNCED",
    imageHash: "4c5b6a7f8e9d0c1b2a3f4e5d6c7b8a9f0e1d2c3b4a5f6e7d8c9b0a1f2e3d4c5b",
    signature: "3046022100b2...8a7f02206c5d...ecdsa_p256",
    gps: { lat: "22.8090° N", lng: "86.1950° E", accuracy: "± 2.0m" },
    timeline: [
      { time: "17:55:08.000", event: "IMAGE CAPTURED", detail: "Standard ambient lighting" },
      { time: "17:55:09.500", event: "COLOUR CALIBRATED", detail: "No reaction observed, baseline clear" },
      { time: "17:55:10.900", event: "RESULT CLASSIFIED", detail: "ΔE2000 = 1.85 (No color shift)" },
      { time: "17:55:12.000", event: "HASH GENERATED", detail: "SHA-256 Digest calculated" },
      { time: "17:55:12.200", event: "SIGNATURE CREATED", detail: "ECDSA Signed" },
      { time: "17:55:16.100", event: "SERVER SYNCED", detail: "Synced to Audit DB" }
    ],
    calibrationDetails: {
      illuminant: "D50",
      patchesDetected: "24/24",
      wbFactor: "R:1.01 G:1.00 B:0.99",
      reagentRegion: "Bounding Box [X:138, Y:275, W:65, H:65]"
    }
  }
];

export const KIT_PROFILES = [
  {
    id: "MARQUIS",
    name: "Marquis Reagent Profile",
    version: "v2.1",
    targetSubstances: "Opiates, Amphetamines, MDMA",
    reagentFormula: "Formaldehyde and Concentrated Sulfuric Acid",
    thresholdConfig: "ΔE2000 > 12.0 for Chromatic Shift; TFLite Cutoff 0.85",
    expectedColors: [
      { label: "Baseline / Blank", hex: "#F4F1EA", lab: "L:95.2 a:-1.2 b:4.5" },
      { label: "Opiates (Purple/Black)", hex: "#2A1B38", lab: "L:14.5 a:12.1 b:-18.3" },
      { label: "Amphetamine (Orange/Brown)", hex: "#A8531E", lab: "L:42.8 a:32.4 b:41.2" },
      { label: "MDMA (Dark Violet/Black)", hex: "#161324", lab: "L:8.4 a:4.2 b:-8.1" }
    ],
    parameters: "Illuminant: D65 / White Point Calibration; 24-patch ArUco grid standard; Exposure lock enabled."
  },
  {
    id: "SCOTT",
    name: "Scott Reagent Profile",
    version: "v1.4",
    targetSubstances: "Cocaine HCl & Cocaine Base",
    reagentFormula: "Cobalt Thiocyanate (2%) in Glycerin/Water + HCl",
    thresholdConfig: "2-Stage Phase Separation Detection; ΔE2000 > 14.5",
    expectedColors: [
      { label: "Baseline (Pink Solution)", hex: "#E89CB0", lab: "L:72.1 a:32.5 b:-2.1" },
      { label: "Positive Step 1 (Flokky Blue)", hex: "#1E5AA8", lab: "L:38.2 a:-4.5 b:-42.1" },
      { label: "Positive Step 3 (Blue Organic Layer)", hex: "#0F3870", lab: "L:24.1 a:-2.8 b:-35.4" }
    ],
    parameters: "Multi-vial sequential analysis tracking; Hydrodynamic layer separation bounding box focus."
  },
  {
    id: "DUQUENOIS-LEVINE",
    name: "Duquenois-Levine Profile",
    version: "v3.0",
    targetSubstances: "Cannabinoids (THC, CBD, CBN)",
    reagentFormula: "Vanillin, Acetaldehyde, Ethanol + HCl + Chloroform",
    thresholdConfig: "Bottom Layer Extraction Color Metric; ΔE2000 > 15.0",
    expectedColors: [
      { label: "Baseline", hex: "#EFECE6", lab: "L:93.1 a:-0.8 b:3.2" },
      { label: "Positive (Violet-Purple Layer)", hex: "#5C246E", lab: "L:22.4 a:38.1 b:-28.4" }
    ],
    parameters: "Biphasic boundary isolation; Non-uniform glare suppression algorithm active."
  }
];

export const RESEARCH_REFERENCES = [
  {
    id: "UNODC-2022",
    title: "UNODC Recommended Guidelines for the Testing of Drugs of Abuse",
    authors: "United Nations Office on Drugs and Crime (UNODC)",
    source: "Laboratory and Scientific Section, Vienna",
    citation: "ST/NAR/34/REV.1",
    keyInsight: "Presumptive colorimetric field testing requires standardized reference lighting and immediate chain-of-custody documentation prior to GC-MS laboratory confirmation."
  },
  {
    id: "CIEDE2000",
    title: "The CIEDE2000 Color-Difference Formula: Implementation Notes & Algorithmic Refinement",
    authors: "Gaurav Sharma, Wencheng Wu, Edul N. Dalal",
    source: "Color Research & Application, Vol. 30, No. 1",
    citation: "DOI: 10.1002/col.20070",
    keyInsight: "Provides non-linear corrections for neutral colors, lightness, chroma, and hue differences (ΔE2000), overcoming classic Euclidean RGB error flaws in field imaging."
  },
  {
    id: "FIPS-180-4",
    title: "NIST FIPS PUB 180-4: Secure Hash Standard (SHS)",
    authors: "National Institute of Standards and Technology",
    source: "U.S. Department of Commerce",
    citation: "FIPS PUB 180-4 (SHA-256 Specification)",
    keyInsight: "Defines cryptographic hash functions producing fixed 256-bit evidence digests resistant to collision and pre-image tampering."
  },
  {
    id: "FIPS-186-5",
    title: "NIST FIPS PUB 186-5: Digital Signature Standard (DSS)",
    authors: "National Institute of Standards and Technology",
    source: "U.S. Department of Commerce",
    citation: "FIPS PUB 186-5 (ECDSA P-256)",
    keyInsight: "Mandates hardware-backed Elliptic Curve Digital Signature Algorithms for unforgeable field record attribution."
  },
  {
    id: "RFC-3161",
    title: "Internet X.509 Public Key Infrastructure Time-Stamp Protocol (TSP)",
    authors: "C. Adams, P. Cain, D. Pinkas, R. Zuccherato",
    source: "IETF RFC 3161",
    citation: "RFC 3161 Timestamp standard",
    keyInsight: "Establishes non-repudiable proof of record existence at an exact UTC timestamp prior to any potential evidence tampering."
  },
  {
    id: "NDPS-1985",
    title: "Narcotic Drugs and Psychotropic Substances Act, 1985",
    authors: "Parliament of India",
    source: "Act No. 61 of 1985",
    citation: "Section 52A — Seizure and Procedure for Inventorying Evidence",
    keyInsight: "Requires objective documentation, unique identification, and cryptographically sound evidence logs during field seizures."
  },
  {
    id: "BSA-2023",
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA)",
    authors: "Ministry of Law and Justice, Govt of India",
    source: "Act No. 47 of 2023",
    citation: "Section 61 & Section 63 — Admissibility of Electronic Records",
    keyInsight: "Mandates electronic record integrity, hash verification, and secure audit trail metadata for court admissibility."
  }
];
