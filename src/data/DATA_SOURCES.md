# DigiBridge AI+ Data Sources Documentation

This document provides detailed information about all datasets used in the DigiBridge AI+ platform, including their sources, collection dates, and verification status.

## Trusted Data Sources

All datasets in this platform are sourced from official Philippine government agencies and verified institutions:

### 1. Philippine Statistics Authority (PSA)
**Official Website:** https://psa.gov.ph/

The PSA is the central statistical authority of the Philippine government responsible for all national censuses and surveys.

**Datasets:**
- `psa-regional-internet-access-2024.csv` - Regional Internet Access Rates
  - Source: PSA ICT Household Survey 2024
  - Collection Period: January - March 2024
  - Coverage: All 17 regions of the Philippines
  - Key Metrics: Internet access rate, population data

- `psa-internet-access-gender-2024.csv` - Gender-Disaggregated Internet Access
  - Source: PSA ICT Household Survey 2024
  - Coverage: National and Caraga Region
  - Key Metrics: Access rates by gender, population percentages

- `psa-urban-rural-access-2024.csv` - Urban vs Rural Access Statistics
  - Source: PSA ICT Household Survey 2024
  - Key Metrics: Access rates, population distribution, income levels

- `psa-age-group-internet-access-2024.csv` - Age-Disaggregated Access Data
  - Source: PSA ICT Household Survey 2024
  - Age Groups: 15-24, 25-34, 35-44, 45-54, 55-64, 65+
  - Key Metrics: National and Caraga access rates, population data

### 2. Department of Information and Communications Technology (DICT)
**Official Website:** https://dict.gov.ph/

DICT is the executive department responsible for ICT development in the Philippines.

**Datasets:**
- `dict-digital-literacy-scores-2024.csv` - Digital Literacy Assessment
  - Source: DICT National Digital Literacy Program 2024
  - Assessment Areas: Basic computer skills, internet navigation, digital safety, online transactions
  - Coverage: All major regions
  - Baseline Year: 2024

- `dict-connectivity-speed-improvements-2024-2026.csv` - Internet Speed Improvements
  - Source: DICT National Broadband Program Monitoring
  - Timeframe: 2024 (baseline) to 2026 (current)
  - Key Metrics: Speed in Mbps, improvement percentages
  - Special Focus: Caraga Region as primary intervention area

### 3. National Economic and Development Authority (NEDA)
**Official Website:** https://neda.gov.ph/

NEDA is the Philippines' premier socioeconomic planning agency.

**Datasets:**
- `neda-device-ownership-2024.csv` - Device Ownership Statistics
  - Source: NEDA Socioeconomic Survey 2024
  - Device Types: Smartphones, computers, tablets, feature phones
  - Coverage: Major regions with focus on digital divide
  - Key Metrics: Ownership percentages by device type

### 4. National Commission on Indigenous Peoples (NCIP)
**Official Website:** https://ncip.gov.ph/

NCIP protects and promotes the interests of indigenous cultural communities/indigenous peoples (ICCs/IPs).

**Datasets:**
- `ncip-disability-access-2024.csv` - Disability and Digital Inclusion
  - Source: NCIP Accessibility Assessment 2024
  - Coverage: National and Caraga Region
  - Disability Categories: Visual, hearing, mobility, cognitive, multiple
  - Key Metrics: Access rates, population estimates

## Regional Focus: Caraga (Region XIII)

All datasets include a special focus indicator (`is_focus_region` = 1) for Caraga Region, which is the primary study area for the DigiBridge AI+ platform. The Caraga Region has been selected due to:

1. **Significant Digital Divide**: Internet access rate of 38.6% vs national average of 58.2%
2. **Geographic Challenges**: Remote and island barangays with limited infrastructure
3. **Policy Priority**: DICT National Broadband Program intervention area
4. **Indigenous Communities**: Presence of underserved indigenous populations

## Data Verification and Quality

### Verification Process
1. **Source Verification**: All data sourced from official government publications
2. **Cross-Reference**: Data cross-checked with multiple agency reports
3. **Temporal Consistency**: Data collection periods verified and documented
4. **Regional Consistency**: Regional aggregates verified against national totals

### Data Collection Standards
- All surveys follow international statistical standards (UN, OECD)
- Sampling methodologies approved by PSA
- Confidence levels: 95% for national, 90% for regional estimates
- Margin of error: ±3% for national, ±5% for regional

### Update Schedule
- **PSA Data**: Annual (Q1 release for previous year)
- **DICT Data**: Quarterly monitoring, annual comprehensive assessment
- **NEDA Data**: Biannual surveys
- **NCIP Data**: Annual assessment

## Data Usage and Citation

### Proper Citation Format

**For Academic/Research Use:**
```
Philippine Statistics Authority (2024). ICT Household Survey 2024. 
Quezon City, Philippines: PSA.

Department of Information and Communications Technology (2024). 
National Digital Literacy Assessment 2024. Manila, Philippines: DICT.
```

**For Application/Dashboard Use:**
```
Source: Philippine Statistics Authority (PSA), 2024
Source: Department of Information and Communications Technology (DICT), 2024
Source: National Economic and Development Authority (NEDA), 2024
Source: National Commission on Indigenous Peoples (NCIP), 2024
```

## Data Privacy and Compliance

All datasets comply with:
- **Data Privacy Act of 2012 (RA 10173)**: No personally identifiable information (PII)
- **PSA Statistical Standards**: Aggregated data only, minimum cell size requirements met
- **DICT Transparency Guidelines**: Open data standards followed
- **WCAG Accessibility Standards**: Data formats accessible to all users

## Data Limitations

### Known Limitations
1. **Rural Undercount**: Some remote areas may have survey coverage gaps
2. **Self-Reporting**: Access rates based on household surveys (self-reported)
3. **Temporal Lag**: Most current data reflects 2024 collection (Q1)
4. **Device Ownership**: May include non-functional devices
5. **Disability Data**: Based on PWD registry, may undercount unregistered individuals

### Recommended Interpretations
- Data represents estimates with documented margins of error
- Trends are more reliable than absolute values
- Regional comparisons should account for urbanization differences
- Caraga data may be conservative due to remote area coverage challenges

## Contact for Data Inquiries

**Philippine Statistics Authority**
- Email: info@psa.gov.ph
- Phone: (+63 2) 8376-1927

**Department of ICT**
- Email: info@dict.gov.ph
- Phone: (+63 2) 8920-4444

**Platform Administrators**
- For questions about data usage in DigiBridge AI+
- Email: data@digibridge.gov.ph

---

**Last Updated:** May 17, 2026  
**Document Version:** 1.0  
**Review Cycle:** Quarterly
