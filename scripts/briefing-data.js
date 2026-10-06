window.NORTHSTAR_WEATHER_BRIEF = {
  publicationReady: true,
  supportSources: [
    { title: "Pre-loss planning", href: "https://recovery.northstar.com/premiere-response-program/pre-loss/" },
    { title: "Facility support", href: "https://recovery.northstar.com/facility-support/" },
    { title: "Water damage", href: "https://recovery.northstar.com/disaster-recovery/water-damage/" },
    { title: "Service directory & contact", href: "https://recovery.northstar.com/" }
  ],
  reportMode: "full",
  hazard: "tropical",
  meta: {
    title: "Gulf Coast client weather briefing",
    shortTitle: "Gulf Disturbance 57",
    advisory: "StormGeo Advisory 1",
    location: "New Orleans · Pensacola · Gulf Breeze · Navarre",
    audience: "Property, facilities and risk leaders",
    primarySource: "StormGeo",
    officialStatus: "NHC AL92 disturbance outlook; 90% development",
    validTime: "StormGeo: Oct 6, 2026, 9 a.m. CDT",
    publishedTime: "October 6, 2026",
    dataCutoff: "October 6, 2026, 9:50 a.m. EDT / 8:50 a.m. CDT",
    nextUpdate: "StormGeo due by 3 p.m. CDT Oct 6; earlier if official guidance changes",
    confidence: "Development: high official probability; track and site impacts uncertain",
    printLabel: "NORTHSTAR | GULF DISTURBANCE 57 | OCT 6, 2026"
  },
  hero: {
    eyebrow: "NorthStar client weather brief",
    title: "Prepare before",
    accent: "the weekend.",
    deck: "Four locations. One clear readiness picture.",
    decisionSignal: "Complete protection and confirm continuity arrangements before Friday coastal conditions and Saturday wind windows.",
    countdownEyebrow: "Primary site wind window",
    countdownValue: "Saturday",
    countdownLabel: "October 10 · all site times CDT",
    freshness: [
      {
        label: "StormGeo",
        value: "Advisory 1 · valid 9 a.m. CDT",
        state: "primary"
      },
      {
        label: "NHC",
        value: "8 a.m. EDT Oct 6 outlook",
        state: "official"
      },
      {
        label: "Location",
        value: "Named areas; no facility pins",
        state: "context"
      }
    ]
  },
  tldr: {
    headline: "What matters for your locations",
    summary: "Prepare for wind, water and access disruption. Use the next forecast to refine the plan—not to begin it.",
    primary: [
      {
        label: "Situation",
        text: "StormGeo favors a Saturday approach toward southeast Louisiana / Mississippi. The Florida Panhandle remains an eastern alternative."
      },
      {
        label: "Earliest decision window",
        text: "Finish priority protection Thursday. Private guidance raises coastal-water concerns Friday; 25+ mph site winds begin early Saturday."
      },
      {
        label: "Priority and uncertainty",
        text: "Pensacola and Navarre have the highest supplied 39-mph wind probabilities. Track shifts could change the ranking; all four locations need preparation."
      }
    ],
    secondary: {
      heading: "Confirm before the next update",
      items: [
        "Who receives official alerts and authorizes site actions?",
        "Which critical loads, fuel and access routes are verified?",
        "Review the next StormGeo advisory, due by 3 p.m. CDT October 6."
      ]
    }
  },
  snapshot: {
    headline: "The storm forecast is not the site forecast.",
    summary: "Read development, storm intensity and local wind exposure as three different measures.",
    metrics: [
      {
        label: "Official development chance",
        value: "90",
        unit: "%",
        detail: "NHC: within 48 hours and seven days.",
        tone: "accent"
      },
      {
        label: "Storm peak sustained",
        value: "65",
        unit: "mph",
        detail: "StormGeo Friday peak; not a facility wind value."
      },
      {
        label: "Site peak gusts",
        value: "53–54",
        unit: "mph",
        detail: "Supplied four-location hourly guidance Saturday."
      },
      {
        label: "Panhandle site rainfall",
        value: "5–10",
        unit: "in",
        detail: "Private Saturday range for the three Florida labels."
      }
    ],
    signals: [
      {
        icon: "OFF",
        title: "Official outlook",
        text: "NHC AL92 remains a disturbance in the 8 a.m. EDT outlook; development likely."
      },
      {
        icon: "PRI",
        title: "Private scenario",
        text: "StormGeo favors moderate-to-strong tropical-storm development; hurricane strength is not ruled out."
      },
      {
        icon: "LOC",
        title: "Location limit",
        text: "No facility address, elevation, roof condition or critical-load inventory was supplied."
      },
      {
        icon: "VAR",
        title: "Main uncertainty",
        text: "Track, shear and dry-air timing can change coastal and inland impacts.",
        tone: "warning"
      }
    ]
  },
  forecast: {
    headline: "Saturday approach, with room for the track to move.",
    summary: "StormGeo is the primary private scenario. The original point map below summarizes its data; it is not an official NHC cone.",
    image: "assets/client-track.png",
    imageAlt: "StormGeo Advisory 1 forecast centers cross the Gulf toward southeast Louisiana and Mississippi, then inland. No impact polygon is shown.",
    imageCaption: "Original plot of StormGeo Advisory 1 positions, valid from Oct 6 at 9 a.m. CDT. Private scenario guidance; line is not a hazard boundary.",
    points: [
      {
        time: "Tue Oct 6 · 9 a.m. CDT",
        state: "Disturbance",
        value: "30 mph",
        location: "Southwestern Gulf",
        current: true
      },
      {
        time: "Thu Oct 8 · 9 p.m. CDT",
        state: "Tropical storm",
        value: "60 mph",
        location: "Central Gulf"
      },
      {
        time: "Fri Oct 9 · 9 a.m./p.m. CDT",
        state: "Forecast peak",
        value: "65 mph",
        location: "Northern approach"
      },
      {
        time: "Sat Oct 10 · 9 a.m. CDT",
        state: "Tropical storm",
        value: "60 mph",
        location: "Near northern Gulf coast",
        focus: true
      }
    ],
    uncertainty: [
      {
        label: "Provider confidence",
        value: "Average"
      },
      {
        label: "Eastern alternative",
        value: "Florida Panhandle"
      },
      {
        label: "Coast-crossing timing",
        value: "Saturday ± about 6h"
      },
      {
        label: "Near-coast weakening",
        value: "Depends on shear / dry air"
      }
    ],
    interpretation: "StormGeo expects stronger squalls east of the center and weakening near land. Its noon-Saturday narrative has no explicit timezone. Do not delay protection because weakening is forecast."
  },
  sites: {
    headline: "Compare your location’s wind window.",
    summary: "Private StormGeo Advisory 1, valid October 6 at 9 a.m. CDT. All wind profiles are Saturday October 10, CDT. Curves preserve the supplied sustained range and gusts; they are not hourly mean winds.",
    items: [
      {
        id: "new-orleans",
        name: "New Orleans",
        region: "Southeast Louisiana",
        status: "Private guidance · Oct 10, CDT",
        impactWindow: "Sat Oct 10: 1:56 am–3:05 pm CDT (25+ mph sustained)",
        peakPeriod: "Sat Oct 10: 9:00 am–10:00 am CDT",
        precipitation: "No amount in supplied site product",
        resolution: "Named area; exact configured point not supplied",
        narrative: "Heavier squalls may pass east, but gusts could still interrupt power. No site rain or surge total was supplied.",
        metrics: [
          {
            label: "25+ mph onset",
            value: "1:56 am",
            detail: "Sat Oct 10 · CDT"
          },
          {
            label: "Peak sustained upper",
            value: "31 mph",
            detail: "Upper end of supplied range"
          },
          {
            label: "Peak gust",
            value: "53 mph",
            detail: "Saturday · 9:00 am–10:00 am CDT"
          },
          {
            label: "25+ mph duration",
            value: "13h 09m",
            detail: "Provider duration"
          }
        ],
        probabilities: [
          {
            label: "25+ mph sustained",
            value: 56
          },
          {
            label: "39+ mph sustained",
            value: 26
          },
          {
            label: "58+ mph sustained",
            value: 6
          }
        ],
        chart: {
          unit: "mph",
          times: [
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00"
          ],
          series: [
            {
              name: "Sustained lower",
              values: [
                11,
                12,
                13,
                13,
                14,
                15,
                15,
                15,
                15,
                14,
                13,
                12,
                10
              ],
              color: "#54626F"
            },
            {
              name: "Sustained upper",
              values: [
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                31,
                30,
                29,
                28,
                27,
                25
              ],
              color: "#104C8E"
            },
            {
              name: "Gust",
              values: [
                42,
                44,
                45,
                47,
                47,
                49,
                53,
                53,
                49,
                48,
                46,
                44,
                43
              ],
              color: "#B85510"
            }
          ]
        }
      },
      {
        id: "pensacola",
        name: "Pensacola",
        region: "Florida Panhandle",
        status: "Private guidance · Oct 10, CDT",
        impactWindow: "Sat Oct 10: 1:55 am–9:05 pm CDT (25+ mph sustained)",
        peakPeriod: "Sat Oct 10: 4:00 pm CDT",
        precipitation: "5–10 inches possible Saturday",
        resolution: "Named area; exact configured point not supplied",
        narrative: "Private guidance supports wind, rainfall and coastal-access preparation; building flood depth and outage duration are not established.",
        metrics: [
          {
            label: "25+ mph onset",
            value: "1:55 am",
            detail: "Sat Oct 10 · CDT"
          },
          {
            label: "Peak sustained upper",
            value: "42 mph",
            detail: "Upper end of supplied range"
          },
          {
            label: "Peak gust",
            value: "54 mph",
            detail: "Saturday · 4:00 pm CDT"
          },
          {
            label: "25+ mph duration",
            value: "19h 10m",
            detail: "Provider duration"
          }
        ],
        probabilities: [
          {
            label: "25+ mph sustained",
            value: 60
          },
          {
            label: "39+ mph sustained",
            value: 53
          },
          {
            label: "58+ mph sustained",
            value: 14
          }
        ],
        chart: {
          unit: "mph",
          times: [
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00"
          ],
          series: [
            {
              name: "Sustained lower",
              values: [
                12,
                12,
                12,
                13,
                14,
                15,
                15,
                16,
                17,
                18,
                19,
                19,
                19,
                23,
                24,
                24,
                23,
                22,
                13,
                12
              ],
              color: "#54626F"
            },
            {
              name: "Sustained upper",
              values: [
                26,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
                36,
                36,
                40,
                42,
                41,
                41,
                39,
                27,
                26
              ],
              color: "#104C8E"
            },
            {
              name: "Gust",
              values: [
                36,
                37,
                38,
                39,
                39,
                41,
                41,
                42,
                45,
                46,
                46,
                46,
                50,
                52,
                54,
                53,
                52,
                51,
                38,
                36
              ],
              color: "#B85510"
            }
          ]
        }
      },
      {
        id: "gulf-breeze",
        name: "Gulf Breeze",
        region: "Florida Panhandle",
        status: "Private guidance · Oct 10, CDT",
        impactWindow: "Sat Oct 10: 2:19 am–9:01 pm CDT (25+ mph sustained)",
        peakPeriod: "Sat Oct 10: 4:00 pm–5:00 pm CDT",
        precipitation: "5–10 inches possible Saturday",
        resolution: "Named area; exact configured point not supplied",
        narrative: "Private guidance supports wind, rainfall and coastal-access preparation; building flood depth and outage duration are not established.",
        metrics: [
          {
            label: "25+ mph onset",
            value: "2:19 am",
            detail: "Sat Oct 10 · CDT"
          },
          {
            label: "Peak sustained upper",
            value: "39 mph",
            detail: "Upper end of supplied range"
          },
          {
            label: "Peak gust",
            value: "53 mph",
            detail: "Saturday · 4:00 pm–5:00 pm CDT"
          },
          {
            label: "25+ mph duration",
            value: "18h 42m",
            detail: "Provider duration"
          }
        ],
        probabilities: [
          {
            label: "25+ mph sustained",
            value: 57
          },
          {
            label: "39+ mph sustained",
            value: 29
          },
          {
            label: "58+ mph sustained",
            value: 10
          }
        ],
        chart: {
          unit: "mph",
          times: [
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00"
          ],
          series: [
            {
              name: "Sustained lower",
              values: [
                11,
                11,
                12,
                12,
                13,
                14,
                15,
                16,
                16,
                17,
                17,
                18,
                21,
                22,
                22,
                21,
                20,
                11,
                11
              ],
              color: "#54626F"
            },
            {
              name: "Sustained upper",
              values: [
                25,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                33,
                34,
                38,
                39,
                39,
                38,
                37,
                26,
                25
              ],
              color: "#104C8E"
            },
            {
              name: "Gust",
              values: [
                37,
                37,
                39,
                39,
                40,
                41,
                42,
                44,
                45,
                46,
                46,
                49,
                52,
                53,
                53,
                52,
                51,
                38,
                36
              ],
              color: "#B85510"
            }
          ]
        }
      },
      {
        id: "navarre",
        name: "Navarre",
        region: "Florida Panhandle",
        status: "Private guidance · Oct 10, CDT",
        impactWindow: "Sat Oct 10: 4:33 am–8:03 pm CDT (25+ mph sustained)",
        peakPeriod: "Sat Oct 10: 5:00 pm CDT",
        precipitation: "5–10 inches possible Saturday",
        resolution: "Named area; exact configured point not supplied",
        narrative: "Private guidance supports wind, rainfall and coastal-access preparation; building flood depth and outage duration are not established.",
        metrics: [
          {
            label: "25+ mph onset",
            value: "4:33 am",
            detail: "Sat Oct 10 · CDT"
          },
          {
            label: "Peak sustained upper",
            value: "41 mph",
            detail: "Upper end of supplied range"
          },
          {
            label: "Peak gust",
            value: "53 mph",
            detail: "Saturday · 5:00 pm CDT"
          },
          {
            label: "25+ mph duration",
            value: "15h 29m",
            detail: "Provider duration"
          }
        ],
        probabilities: [
          {
            label: "25+ mph sustained",
            value: 58
          },
          {
            label: "39+ mph sustained",
            value: 52
          },
          {
            label: "58+ mph sustained",
            value: 14
          }
        ],
        chart: {
          unit: "mph",
          times: [
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00"
          ],
          series: [
            {
              name: "Sustained lower",
              values: [
                12,
                12,
                13,
                13,
                14,
                15,
                16,
                17,
                17,
                17,
                20,
                23,
                23,
                23,
                22,
                11
              ],
              color: "#54626F"
            },
            {
              name: "Sustained upper",
              values: [
                26,
                26,
                27,
                28,
                29,
                31,
                32,
                32,
                33,
                33,
                37,
                40,
                41,
                40,
                39,
                25
              ],
              color: "#104C8E"
            },
            {
              name: "Gust",
              values: [
                37,
                37,
                38,
                39,
                39,
                42,
                43,
                44,
                43,
                47,
                48,
                51,
                53,
                51,
                51,
                36
              ],
              color: "#B85510"
            }
          ]
        }
      }
    ]
  },
  geography: {
    headline: "Verify the property behind each location label.",
    summary: "These forecasts identify communities, not verified buildings. Evacuation zones, flood depths, structural vulnerability and approved routes cannot be inferred from a city name.",
    resolutionNote: "Resolution: named forecast areas only. No coordinates were supplied; no parcel flood-zone, elevation, surge or warning-polygon intersection was performed. Geography pages are preparedness context, not current orders.",
    layers: [
      {
        name: "New Orleans",
        status: "Drainage and access",
        level: "context",
        detail: "Confirm water-entry points, drainage history and alternate access. City rain guidance describes susceptibility, not this event’s flood depth.",
        source: "NOLA Ready · planning context",
        href: "https://ready.nola.gov/rain/"
      },
      {
        name: "Pensacola",
        status: "Verify the actual zone",
        level: "context",
        detail: "Use the exact property location to confirm evacuation zone and official alert recipients.",
        source: "Escambia Emergency Management",
        href: "https://myescambia.com/our-services/public-safety/beready"
      },
      {
        name: "Gulf Breeze / Navarre",
        status: "Confirm route dependencies",
        level: "context",
        detail: "Identify the actual facility and any shared bridge or low-road dependence. Navarre is not automatically Navarre Beach.",
        source: "Santa Rosa Emergency Management",
        href: "https://www.santarosa.fl.gov/974/Emergency-Management"
      },
      {
        name: "Coastal water",
        status: "No property depth assigned",
        level: "unknown",
        detail: "For Pensacola, Gulf Breeze and Navarre, private guidance gives tides 1–3 ft above normal Friday and possible 3–5 ft surge Saturday. The surge datum is unspecified. Do not add these ranges or treat them as building flood depth.",
        source: "NHC surge interpretation",
        href: "https://www.nhc.noaa.gov/surge/"
      }
    ]
  },
  timeline: {
    headline: "Move the preparation deadline ahead of the hazard.",
    summary: "Recommended coordination sequence, not an emergency order. Client plans and public authorities control shutdown, evacuation and safe entry.",
    gates: [
      {
        key: "now",
        label: "Now",
        time: "Oct 6–7",
        title: "Confirm ownership and resources.",
        body: "Name the decision owner and alert recipients. Confirm actual vendor availability and the facility details needed for a site-specific update.",
        items: [
          "Verify critical loads, backup testing and usable fuel.",
          "Confirm primary and alternate access.",
          "Set the next forecast review."
        ]
      },
      {
        key: "protect",
        label: "Protect",
        time: "Thu Oct 8",
        title: "Close protection and documentation gaps.",
        body: "Complete safe exterior work before conditions restrict it. Record existing conditions and prior repairs.",
        items: [
          "Secure loose materials and vulnerable contents.",
          "Verify drainage and approved temporary measures.",
          "Confirm spending and access authority."
        ]
      },
      {
        key: "monitor",
        label: "Monitor",
        time: "Fri–Sat Oct 9–10",
        title: "Use local thresholds to change posture.",
        body: "Coastal water may rise Friday; site wind windows begin early Saturday. Review each update against actual site limits.",
        items: [
          "Check official warnings and local instructions.",
          "Verify route conditions before dispatch.",
          "Avoid relying on the forecast centerline."
        ]
      },
      {
        key: "assess",
        label: "Assess",
        time: "After passage",
        title: "Enter only when authorized.",
        body: "Sunday improvement in the private scenario is not an all-clear. Confirm access, structure and electrical safety before assessment.",
        items: [
          "Document water source, extent and affected systems.",
          "Preserve photos and the event chronology.",
          "Authorize stabilization and reopening through the proper owners."
        ]
      }
    ]
  },
  confidence: {
    headline: "High development probability does not settle local impact.",
    summary: "Source roles explain decision authority; they are not numerical weights or a blended forecast.",
    posture: "Site impacts unresolved",
    postureDetail: "StormGeo’s forecast confidence is Average. Facility impacts are not assessable without confirmed locations and vulnerabilities. Prepare for the supplied scenario and retain stronger, slower or shifted-track alternatives.",
    rows: [
      {
        source: "NHC",
        role: "Controlling official outlook",
        signal: "90% formation within 48h / 7d; specifics uncertain.",
        agreement: "Official anchor",
        freshness: "8 a.m. EDT Oct 6"
      },
      {
        source: "StormGeo",
        role: "Primary private scenario",
        signal: "Saturday northern-Gulf approach; 4 named-area profiles.",
        agreement: "Separate lane",
        freshness: "Valid 9 a.m. CDT Oct 6"
      },
      {
        source: "NWS / WPC",
        role: "High planning value",
        signal: "Heavy rain, east-side asymmetry and regional uncertainty.",
        agreement: "Broad support",
        freshness: "Morning Oct 6"
      },
      {
        source: "GFS / ECMWF / GEFS",
        role: "Supporting models",
        signal: "Comparable Saturday time slice shows timing and position differences.",
        agreement: "Spread remains",
        freshness: "00Z Oct 6 runs"
      },
      {
        source: "Property exposure",
        role: "Location / vulnerability gate",
        signal: "Address, elevation, access and building data not supplied.",
        agreement: "Not assessable",
        freshness: "Input limit"
      }
    ]
  },
  readiness: {
    headline: "Confirm the gaps that could interrupt operations.",
    summary: "A client coordination checklist. Completion records your inputs; it does not certify a property safe or establish NorthStar availability.",
    groups: [
      {
        id: "people",
        title: "People and authority",
        items: [
          "Decision owner and after-hours contacts confirmed",
          "Alert recipient and next review time assigned",
          "Shutdown and access authority documented"
        ]
      },
      {
        id: "power",
        title: "Power and critical systems",
        items: [
          "Critical loads and tested backup capacity verified",
          "Usable fuel and replenishment routes checked",
          "Outage-sensitive occupants or processes identified"
        ]
      },
      {
        id: "access",
        title: "Water and access",
        items: [
          "Drainage and previous entry points checked",
          "Primary and alternate routes assessed",
          "Exact property and evacuation zone confirmed"
        ]
      },
      {
        id: "evidence",
        title: "Documentation and continuity",
        items: [
          "Pre-event photos and prior repairs indexed",
          "Temporary-measure authority confirmed",
          "Alternate operating and assessment plans ready"
        ]
      }
    ]
  },
  roles: {
    headline: "Plan for a stronger or shifted-track outcome.",
    summary: "Client contingency exercise—not a forecast probability or a predicted loss. Test wind, water, utility interruption and blocked access together.",
    items: [
      {
        id: "facility",
        name: "Facility leadership",
        priority: "Continuity",
        actions: [
          "Test loss of utility power and one access route together.",
          "Confirm essential loads, staff relief and alternative operations.",
          "Use approved site thresholds for shutdown and reentry."
        ],
        boundary: "No outage duration or structural performance is predicted."
      },
      {
        id: "risk",
        name: "Risk leadership",
        priority: "Decision authority",
        actions: [
          "Confirm who can approve protective and temporary measures.",
          "Set escalation triggers for stronger or earlier hazards.",
          "Retain a dated decision record and communications cadence."
        ],
        boundary: "Coverage and emergency authority remain with authorized parties."
      },
      {
        id: "consultant",
        name: "Building and technical advisers",
        priority: "Condition evidence",
        actions: [
          "Document prior defects and current work before the event.",
          "Prepare water-entry, roof and electrical assessment priorities.",
          "Use qualified specialists for energization and environmental questions."
        ],
        boundary: "No engineering or environmental conclusion is established here."
      },
      {
        id: "claims",
        name: "Claims and finance contacts",
        priority: "Chronology and documentation",
        actions: [
          "Preserve source issue and valid times.",
          "Record authorizations, costs and temporary measures.",
          "Separate forecast concerns from observed event damage."
        ],
        boundary: "Forecast exposure is not a coverage or causation determination."
      }
    ]
  },
  appendix: {
    headline: "Forecast values and definitions.",
    summary: "Saturday October 10, CDT. Retain ranges and probability meanings; do not convert a forecast to a property-loss estimate.",
    tables: [
      {
        title: "Private site threshold windows",
        columns: [
          "Location",
          "25+ mph sustained",
          "39+ mph sustained",
          "P(39 mph)",
          "Peak gust"
        ],
        rows: [
          [
            "New Orleans",
            "1:56 am–3:05 pm CDT",
            "No 39+ window listed",
            "26%",
            "53 mph"
          ],
          [
            "Pensacola",
            "1:55 am–9:05 pm CDT",
            "2:30 pm–7:00 pm CDT",
            "53%",
            "54 mph"
          ],
          [
            "Gulf Breeze",
            "2:19 am–9:01 pm CDT",
            "3:13 pm–5:56 pm CDT",
            "29%",
            "53 mph"
          ],
          [
            "Navarre",
            "4:33 am–8:03 pm CDT",
            "3:12 pm–7:00 pm CDT",
            "52%",
            "53 mph"
          ]
        ],
        note: "All site probabilities are for sustained wind during cyclone passage. All four products show <1% at 74 mph and 100 mph; <1% is not zero. New Orleans has no deterministic 39+ window, but still a 26% probability."
      },
      {
        title: "How to read the source differences",
        columns: [
          "Topic",
          "Interpretation"
        ],
        rows: [
          [
            "Wind profile",
            "Source describes maximum likely wind in each hour. Supplied lower–upper range is preserved; not an hourly average."
          ],
          [
            "Rainfall",
            "StormGeo: 5–10 in Saturday at three Florida labels. WPC: regional 3–7 in, Fri–Sun. Different geography and windows; do not average."
          ],
          [
            "Coastal water",
            "Friday tide anomaly and Saturday surge are different measures. Surge datum unspecified; no building inundation depth assigned."
          ],
          [
            "Source precision",
            "Titles identify Disturbance 57; site prose contains a 37 typo. Navarre durations differ from endpoint arithmetic by one minute; endpoints retained."
          ]
        ],
        note: "Product valid time is Oct 6, 9 a.m. CDT; explicit issue time is not supplied. Forecast hour-108 position in the new advisory is 32.0°N, 89.1°W. No exact client coordinates or property details are published."
      }
    ]
  },
  sources: {
    headline: "Sources, roles and the next review.",
    summary: "Information cutoff: October 6, 2026, 9:50 a.m. EDT / 8:50 a.m. CDT. Review on the next material official change or StormGeo advisory, due by 3 p.m. CDT today.",
    limitations: "This briefing supports client preparedness. It is not an official warning, emergency instruction, engineering opinion, environmental determination, coverage opinion or guarantee of site conditions.",
    items: [
      {
        title: "StormGeo Advisory 1 and four site forecasts",
        authority: "Private scenario guidance",
        role: "Private scenario guidance",
        weight: "Primary private scenario",
        validTime: "Valid Oct 6, 9 a.m. CDT",
        href: "",
        note: "Supplied products summarized. Exact facility points and vulnerability data are absent; no private source files, graphics or links are distributed.",
        private: true
      },
      {
        title: "NHC Atlantic Tropical Weather Outlook",
        authority: "Official status / development",
        role: "Official status / development",
        weight: "Controlling",
        validTime: "Oct 6, 8 a.m. EDT",
        href: "https://prod-east-nhc.woc.noaa.gov/mobile/text/refresh/MIATWOAT%2Bhtml/292305_MIATWOAT.html",
        note: "AL92 development odds; no property forecast. Monitor future advisories for official designations and warnings.",
        private: false
      },
      {
        title: "NWS New Orleans / Baton Rouge",
        authority: "Local forecast reasoning",
        role: "Local forecast reasoning",
        weight: "High planning value",
        validTime: "Oct 6, 5:55 a.m. CDT",
        href: "https://www.weather.gov/lix/",
        note: "Supports track uncertainty and east-of-center hazards. Does not establish a facility warning intersection.",
        private: false
      },
      {
        title: "NWS Mobile / Pensacola",
        authority: "Local forecast and hazards",
        role: "Local forecast and hazards",
        weight: "High planning value",
        validTime: "Oct 6, 6:41 a.m. CDT",
        href: "https://www.weather.gov/mob/",
        note: "Heavy-rain, beach and marine context. Retained 80% development text predates the NHC 90% outlook; NHC controls that measure.",
        private: false
      },
      {
        title: "WPC Excessive Rainfall Outlook",
        authority: "Regional rainfall guidance",
        role: "Regional rainfall guidance",
        weight: "High planning value",
        validTime: "Oct 6, 4:30 a.m. EDT; valid Oct 9–11",
        href: "https://www.wpc.ncep.noaa.gov/index.php#page=ero",
        note: "Regional 3–7-inch swath and global-model timing comparison. Direct browser discussion reviewed; no property total inferred.",
        private: false
      },
      {
        title: "Tropical Tidbits model analysis",
        authority: "Model visualization",
        role: "Model visualization",
        weight: "Supporting",
        validTime: "00Z Oct 6; comparison valid 12Z Oct 10",
        href: "https://www.tropicaltidbits.com/analysis/models/",
        note: "Fixed attributed GFS, ECMWF and GEFS snapshots. GFS rain rate is 6-hour average; ECMWF is instantaneous. GFS and GEFS share lineage.",
        private: false
      },
      {
        title: "Local emergency-management resources",
        authority: "Community preparedness context",
        role: "Community preparedness context",
        weight: "High planning value",
        validTime: "Accessed Oct 6; page update times not stated",
        href: "https://www.santarosa.fl.gov/974/Emergency-Management",
        note: "NOLA Ready and Escambia links appear in geography. Confirm actual facility zones and current orders; no route-clear claim is made.",
        private: false
      },
      {
        title: "NHC storm-surge guidance",
        authority: "Hazard definitions",
        role: "Hazard definitions",
        weight: "Supporting",
        validTime: "Reference guidance checked Oct 6",
        href: "https://www.nhc.noaa.gov/surge/",
        note: "Use source datum and event-specific official products. Surge estimates are not automatically inundation depth at a facility.",
        private: false
      }
    ]
  },
  readinessImage: {
    image: "assets/client-readiness.png",
    alt: "Client readiness sequence and StormGeo private chances of sustained winds reaching39mph: NewOrleans26percent,Pensacola53,GulfBreeze29,Navarre52.",
    headline: "Your readiness plan at a glance.",
    summary: "A visual summary of the same private guidance and preparation sequence.",
    caption: "Original imagegen summary from StormGeo Advisory 1; valid Oct 6, 9 a.m. CDT. Named-area guidance, not official warnings or property-damage probability."
  },
  visualEvidence: {
    headline: "Three views of Saturday morning.",
    summary: "Model guidance—not an official forecast. Compare pressure position at one valid time; these are not the latest-cycle claim or a forecast blend.",
    items: [
      {
        image: "assets/public-models/gfs-oct10.png",
        alt: "GFS model pressure and precipitation or ensemble spread at Saturday12Z.",
        provider: "Tropical Tidbits",
        model: "GFS",
        initialization: "00Z Oct 6, 2026",
        validTime: "12Z Oct 10, 2026 · 7 a.m. CDT",
        question: "Could slower movement extend the window?",
        caption: "Low remains offshore in this time slice. Rain rate is a six-hour average, not accumulated rainfall. Model guidance—not an official forecast.",
        href: "https://www.tropicaltidbits.com/analysis/models/?model=gfs&region=seus&pkg=mslp_pcpn_frzn&runtime=2026100600&fh=108"
      },
      {
        image: "assets/public-models/ecmwf-oct10.png",
        alt: "ECMWF model pressure and precipitation or ensemble spread at Saturday12Z.",
        provider: "Tropical Tidbits",
        model: "ECMWF",
        initialization: "00Z Oct 6, 2026",
        validTime: "12Z Oct 10, 2026 · 7 a.m. CDT",
        question: "Could faster movement shorten preparation?",
        caption: "Low is farther north than GFS at the same time. Instantaneous rain rate is not directly comparable with GFS rain colors. Model guidance—not an official forecast.",
        href: "https://www.tropicaltidbits.com/analysis/models/?model=ecmwf&region=seus&pkg=mslp_pcpn_frzn&runtime=2026100600&fh=108"
      },
      {
        image: "assets/public-models/gefs-oct10.png",
        alt: "GEFS model pressure and precipitation or ensemble spread at Saturday12Z.",
        provider: "Tropical Tidbits",
        model: "GEFS",
        initialization: "00Z Oct 6, 2026",
        validTime: "12Z Oct 10, 2026 · 7 a.m. CDT",
        question: "How dispersed are the low-pressure centers?",
        caption: "Ensemble centers show positional spread. Member pressure labels and spread shading are not calibrated landfall probabilities. Model guidance—not an official forecast.",
        href: "https://www.tropicaltidbits.com/analysis/models/?model=gfs-ens&region=us&pkg=lowlocs&runtime=2026100600&fh=108"
      }
    ]
  }
};
