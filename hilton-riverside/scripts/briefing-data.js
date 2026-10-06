window.NORTHSTAR_WEATHER_BRIEF = {
  publicationReady: true,
  supportSources: [
    {
      title: "Pre-loss planning",
      href: "https://recovery.northstar.com/premiere-response-program/pre-loss/"
    },
    {
      title: "Facility support",
      href: "https://recovery.northstar.com/facility-support/"
    },
    {
      title: "Water damage",
      href: "https://recovery.northstar.com/disaster-recovery/water-damage/"
    },
    {
      title: "Service directory & contact",
      href: "https://recovery.northstar.com/"
    }
  ],
  reportMode: "full",
  hazard: "tropical",
  meta: {
    title: "Hilton New Orleans Riverside weather and continuity briefing",
    shortTitle: "Hilton Riverside",
    advisory: "October 6, 2026 briefing",
    location: "Two Poydras Street · New Orleans",
    audience: "Park Hotels & Resorts and Hilton New Orleans Riverside leadership",
    primarySource: "StormGeo Advisory 1",
    officialStatus: "AL92 disturbance · NHC 8 a.m. EDT outlook",
    validTime: "Private guidance: Oct 6, 9 a.m. CDT",
    publishedTime: "October 6, 2026",
    dataCutoff: "October 6, 2026, 12:06 p.m. CDT / 1:06 p.m. EDT",
    nextUpdate: "Review next NHC outlook and StormGeo advisory; private update due by 3 p.m. CDT Oct 6",
    confidence: "Track uncertain; hotel conditions require confirmation",
    printLabel: "NORTHSTAR | HILTON RIVERSIDE | OCT 6, 2026 | CLIENT USE"
  },
  hero: {
    eyebrow: "Hotel weather intelligence",
    title: "Hilton New Orleans",
    accent: "Riverside.",
    deck: "Protect guest continuity. Resolve the property questions before the weekend.",
    decisionSignal: "Target Thursday for readiness checks. Confirm guest plans, critical services and access before Friday conditions and the private early-Saturday wind window.",
    countdownEyebrow: "Readiness target",
    countdownValue: "Thursday",
    countdownLabel: "October 8 · recommended planning target",
    freshness: [
      {
        label: "Official local",
        value: "NWS vicinity · updated Oct 6",
        state: "official"
      },
      {
        label: "Private",
        value: "StormGeo · valid Oct 6, 9 a.m. CDT",
        state: "primary"
      },
      {
        label: "Property plan",
        value: "2019 assessment · updated Apr 2024",
        state: "context"
      }
    ]
  },
  tldr: {
    headline: "Prepare the hotel around three decisions.",
    summary: "The address and riverfront setting are verified. Building condition, backup capability and current access still need hotel confirmation.",
    primary: [
      {
        label: "Guest and group continuity",
        text: "Set the next decision time for arrivals, departures, events and accessible transport. Hilton lists 1,622 rooms; actual occupancy is unknown."
      },
      {
        label: "Engineering readiness",
        text: "Verify tested backup loads, usable fuel, cooling and water dependencies. The older assessment cannot establish today’s operating capacity."
      },
      {
        label: "Weather timing",
        text: "NWS vicinity guidance shows Friday–Saturday gusts to 30 mph. StormGeo’s separate New Orleans profile peaks at 53 mph Saturday morning."
      }
    ],
    secondary: {
      heading: "Resolve before Friday",
      items: [
        "Who authorizes guest-service changes and contractor shutdown?",
        "Which critical systems have verified continuity arrangements?",
        "Which street, receiving and parking approaches remain usable?"
      ]
    }
  },
  snapshot: {
    headline: "Four measures. Four different meanings.",
    summary: "Formation odds, storm strength and local guidance answer different questions. None measures damage probability at the hotel.",
    metrics: [
      {
        label: "NHC development chance",
        value: "90",
        unit: "%",
        detail: "48 hours and seven days · Oct 6, 8 a.m. EDT",
        tone: "accent"
      },
      {
        label: "StormGeo storm peak",
        value: "65",
        unit: "mph",
        detail: "Friday sustained wind at the cyclone, not at the hotel"
      },
      {
        label: "NWS vicinity gust",
        value: "30",
        unit: "mph",
        detail: "Friday and Saturday · near-hotel gridded forecast"
      },
      {
        label: "StormGeo area peak gust",
        value: "53",
        unit: "mph",
        detail: "New Orleans label · Saturday 9–10 a.m. CDT"
      }
    ],
    signals: [
      {
        icon: "OFF",
        title: "Official anchor",
        text: "AL92 remains a disturbance in the reviewed NHC outlook. Northern Gulf specifics remain uncertain."
      },
      {
        icon: "PRI",
        title: "Private scenario",
        text: "StormGeo favors a Saturday Louisiana / Mississippi approach, with an eastern alternative."
      },
      {
        icon: "LOC",
        title: "Property boundary",
        text: "Address verified. Neither forecast is a verified hotel-roof, flood-depth or damage forecast."
      },
      {
        icon: "VAR",
        title: "Escalation branch",
        text: "A stronger, slower or shifted system could increase the operational burden.",
        tone: "warning"
      }
    ]
  },
  forecast: {
    headline: "Saturday approach, with room for the track to move.",
    summary: "StormGeo Advisory 1 is the private planning scenario. This data plot shows forecast centers; it does not show the size of the wind or water hazard.",
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
    headline: "Saturday morning is the private wind focus.",
    summary: "StormGeo Advisory 1 · valid Oct 6, 9 a.m. CDT. Supplied “New Orleans” profile; its configured location has not been confirmed as this hotel. Times below are Saturday Oct 10, CDT.",
    items: [
      {
        id: "new-orleans",
        name: "New Orleans area",
        region: "Southeast Louisiana",
        status: "Private guidance · Oct 10, CDT",
        impactWindow: "Sat Oct 10: 1:56 am–3:05 pm CDT (25+ mph sustained)",
        peakPeriod: "Sat Oct 10: 9:00 am–10:00 am CDT",
        precipitation: "No amount in supplied site product",
        resolution: "Provider point not confirmed as Hilton Riverside",
        narrative: "Heavier squalls may pass east of the provider point, but gusts could interrupt power. No New Orleans rain or surge amount was supplied.",
        metrics: [
          {
            label: "25+ mph onset",
            value: "1:56 am",
            detail: "Sat Oct 10 · CDT"
          },
          {
            label: "Peak sustained range",
            value: "15–31 mph",
            detail: "Maximum-likely hourly range; not an average"
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
      }
    ]
  },
  geography: {
    headline: "Assess the exposure by pathway.",
    summary: "These are hotel-specific planning questions, not observed defects or predicted failures. A riverfront address alone does not establish storm-surge inundation.",
    resolutionNote: "No current FEMA parcel determination, finished-floor elevation, flood depth, warning intersection or route-clear status was verified. City preparedness pages are reference guidance, not an event-specific order.",
    layers: [
      {
        name: "Wind and rain entry",
        status: "Roof / facade / exterior items",
        level: "context",
        detail: "Review current envelope condition, temporary openings, outdoor pool furniture and signage. Use hotel-approved weather limits.",
        source: "Hilton public property context",
        href: "https://www.hilton.com/en/hotels/msynhhh-hilton-new-orleans-riverside/"
      },
      {
        name: "Rainfall and drainage",
        status: "Entry points / receiving",
        level: "context",
        detail: "Confirm prior water-entry locations, drain condition and any lower-level assets. No event-specific hotel rain depth is available.",
        source: "NOLA Ready rain guidance",
        href: "https://ready.nola.gov/rain/"
      },
      {
        name: "Utilities and service",
        status: "Power / cooling / water",
        level: "unknown",
        detail: "Confirm the systems actually served by backup power and their fuel, water and staffing dependencies. Do not assume whole-hotel backup.",
        source: "PLAC historical record; verify on site",
        href: ""
      },
      {
        name: "Access and riverfront",
        status: "Separate the mechanisms",
        level: "unknown",
        detail: "Street ponding, river flooding and coastal surge are different hazards. Check street conditions and official instructions before moving guests, staff or deliveries.",
        source: "City Streetwise road information",
        href: "https://streetwise.nola.gov/"
      }
    ]
  },
  timeline: {
    headline: "Make Thursday the readiness checkpoint.",
    summary: "Recommended coordination sequence. Hotel procedures and public authorities control closure, shelter, evacuation and reentry decisions.",
    gates: [
      {
        key: "now",
        label: "Confirm",
        time: "Tue–Wed Oct 6–7",
        title: "Resolve the critical unknowns.",
        body: "Set the decision owner, forecast review and current guest/event picture.",
        items: [
          "Reconcile backup power records with engineering.",
          "Confirm active renovation and contractor areas.",
          "Check response scopes and vendor availability."
        ]
      },
      {
        key: "protect",
        label: "Protect",
        time: "Thu Oct 8",
        title: "Complete approved protection while conditions allow.",
        body: "Document existing conditions and close readiness gaps ahead of Friday operations.",
        items: [
          "Check drains, exterior items and temporary openings.",
          "Verify essential loads, fuel and replenishment.",
          "Confirm guest communications and alternate arrangements."
        ]
      },
      {
        key: "monitor",
        label: "Monitor",
        time: "Fri–Sat Oct 9–10",
        title: "Adjust posture to current local conditions.",
        body: "The private 25+ mph wind window starts early Saturday; NWS already shows breezy Friday conditions.",
        items: [
          "Review current NWS/NHC and city instructions.",
          "Confirm staff relief, arrivals and supplier routes.",
          "Apply the hotel’s approved service and access thresholds."
        ]
      },
      {
        key: "assess",
        label: "Assess",
        time: "After passage",
        title: "Restore services through verified gates.",
        body: "Forecast improvement is not an all-clear. Use authorized access and qualified inspections.",
        items: [
          "Check water entry and affected electrical systems.",
          "Confirm cooling, lifts, water and safe guest access.",
          "Document loss chronology and phased recovery approvals."
        ]
      }
    ]
  },
  confidence: {
    headline: "Use each source for the decision it supports.",
    summary: "These are evidence roles, not numerical model weights. No blended wind forecast or invented scenario odds are assigned.",
    posture: "Prepare; verify on site",
    postureDetail: "Confidence is strongest in the need to prepare and the verified hotel identity. Local track and timing remain uncertain. Property failure, flooding and outage duration cannot be quantified from this record.",
    rows: [
      {
        source: "NHC",
        role: "Official development",
        signal: "90% formation at 48h / 7d; specific impacts uncertain.",
        agreement: "Official anchor",
        freshness: "8 a.m. EDT Oct 6"
      },
      {
        source: "NWS vicinity / LIX",
        role: "Local official guidance",
        signal: "Fri–Sat gusts to 30 mph; track and rain placement uncertain.",
        agreement: "Keep local context",
        freshness: "Point 1:57 a.m. CDT Oct 6"
      },
      {
        source: "StormGeo",
        role: "Private scenario",
        signal: "New Orleans peak gust 53 mph; P(39+ sustained) 26%.",
        agreement: "Different point / statistic",
        freshness: "Valid 9 a.m. CDT Oct 6"
      },
      {
        source: "GFS / ECMWF / GEFS",
        role: "Model context",
        signal: "Same-valid-time pressure positions differ; GFS/GEFS share lineage.",
        agreement: "Spread remains",
        freshness: "00Z Oct 6 comparison"
      },
      {
        source: "Hilton / Park / PLAC",
        role: "Property evidence",
        signal: "Identity verified; historical system data require reconfirmation.",
        agreement: "No condition certification",
        freshness: "Public check Oct 6; PLAC older"
      }
    ]
  },
  readiness: {
    headline: "Confirm what must continue through disruption.",
    summary: "Use this hotel coordination checklist to record confirmations. A checked item does not certify safe conditions or reserve response resources.",
    groups: [
      {
        id: "people",
        title: "Guests, groups and authority",
        items: [
          "Current occupancy, events and assistance needs confirmed",
          "Guest communications and relocation decision owners assigned",
          "Current SOP and official-alert recipients confirmed"
        ]
      },
      {
        id: "power",
        title: "Power, cooling and water",
        items: [
          "Actual supported loads and recent transfer tests verified",
          "Usable fuel, water and replenishment arrangements confirmed",
          "Lifts, refrigeration, IT and other critical dependencies reviewed"
        ]
      },
      {
        id: "access",
        title: "Envelope, work areas and access",
        items: [
          "Drainage, prior entry points and temporary openings checked",
          "Exterior items and contractor shutdown duties assigned",
          "Current receiving, parking and alternate routes verified"
        ]
      },
      {
        id: "evidence",
        title: "Response and recovery",
        items: [
          "Pre-event photos and recent repairs indexed",
          "Response scopes, purchasing authority and vendor availability checked",
          "Qualified assessment and phased reopening gates assigned"
        ]
      }
    ]
  },
  roles: {
    headline: "Assign the decisions before conditions change.",
    summary: "Proposed roles for hotel coordination. Confirm actual authority with Park and Hilton; names and private contact details are deliberately excluded.",
    items: [
      {
        id: "leadership",
        name: "General manager / guest services",
        priority: "Guest continuity",
        actions: [
          "Set arrival, departure and group-event decision times.",
          "Identify assistance needs and approved transport options.",
          "Authorize guest communications and service changes."
        ],
        boundary: "Room capacity does not establish occupancy or safe shelter capacity."
      },
      {
        id: "engineering",
        name: "Engineering / contractors",
        priority: "Critical systems",
        actions: [
          "Reconcile legacy ratings with current equipment and tested loads.",
          "Confirm cooling, water, lift and fuel dependencies.",
          "Secure approved work areas and define restart inspections."
        ],
        boundary: "No generator sizing, runtime or building performance is certified."
      },
      {
        id: "operations",
        name: "Operations / security / purchasing",
        priority: "Access and supplies",
        actions: [
          "Confirm actual routes, receiving interfaces and staff relief.",
          "Verify food, water, linen and essential supplier arrangements.",
          "Check current restrictions before dispatch or assessment."
        ],
        boundary: "A map does not confirm a route is open or safe."
      },
      {
        id: "risk",
        name: "Park risk / finance / claims",
        priority: "Evidence and authorization",
        actions: [
          "Confirm protective-work scopes and purchase authority.",
          "Preserve dated condition photos and decision records.",
          "Coordinate qualified assessment and recovery approvals."
        ],
        boundary: "Forecast exposure is not a coverage or causation determination."
      }
    ]
  },
  appendix: {
    headline: "The values behind the New Orleans profile.",
    summary: "Private StormGeo Advisory 1, valid Oct 6 at 9 a.m. CDT. Wind windows are Saturday Oct 10, CDT; probabilities apply during passage.",
    tables: [
      {
        title: "Wind thresholds and interpretation",
        columns: [
          "Measure",
          "Supplied value",
          "Meaning"
        ],
        rows: [
          [
            "25+ mph sustained",
            "1:56 a.m.–3:05 p.m. · 13h 09m",
            "Provider threshold window; first hourly row is 3 a.m."
          ],
          [
            "Peak hourly range / gust",
            "15–31 mph / 53 mph · 9–10 a.m.",
            "Maximum-likely wind range, not hourly average"
          ],
          [
            "Chance of 25 / 39 / 58+ mph",
            "56% / 26% / 6%",
            "Sustained wind; not damage probability"
          ],
          [
            "Chance of 74 / 100+ mph",
            "<1% / <1%",
            "Less than 1% is not zero"
          ],
          [
            "39+ mph deterministic window",
            "None listed",
            "Separate 26% probability remains meaningful"
          ],
          [
            "Rain / surge at hotel",
            "No quantified value established",
            "Do not import the Florida profiles’ amounts"
          ]
        ],
        note: "The supplied New Orleans forecast point is not confirmed as the hotel. NWS vicinity guidance uses a different point, update time and forecast statistic. Neither product defines hotel rooftop wind, inundation or outage duration."
      }
    ]
  },
  sources: {
    headline: "Sources and their limits.",
    summary: "Evidence reviewed Oct 6, 2026, through 12:06 p.m. CDT. Static issue-specific briefing; refresh before operational decisions. StormGeo’s next advisory was due by 3 p.m. CDT.",
    limitations: "This briefing supports hotel preparedness. Follow current official instructions and the approved hotel plan. It does not certify building condition, engineering capacity, coverage or safe access.",
    items: [
      {
        title: "NHC Atlantic outlook",
        authority: "Official development",
        role: "Official development",
        weight: "Controlling",
        validTime: "Oct 6, 8 a.m. EDT",
        href: "https://prod-east-nhc.woc.noaa.gov/mobile/text/refresh/MIATWOAT%2Bhtml/292305_MIATWOAT.html",
        note: "Reviewed AL92 outlook: 90% at 48h and 7d. Formation is not hotel-impact probability.",
        private: false
      },
      {
        title: "NWS hotel-vicinity forecast",
        authority: "Official local weather",
        role: "Official local weather",
        weight: "High planning value",
        validTime: "Updated Oct 6, 1:57 a.m. CDT",
        href: "https://forecast.weather.gov/MapClick.php?lat=29.9511&lon=-90.0715",
        note: "Request point ~0.83 km NW; NWS uses a grid. No exact-hotel hourly rain or warning intersection verified.",
        private: false
      },
      {
        title: "StormGeo Advisory 1 / New Orleans",
        authority: "Private scenario",
        role: "Private scenario",
        weight: "Primary private scenario",
        validTime: "Valid Oct 6, 9 a.m. CDT",
        href: "",
        note: "Supplied forecast summarized. Configured point unresolved; original email, private links and graphics excluded.",
        private: true
      },
      {
        title: "Hilton public hotel information",
        authority: "Property identity / functions",
        role: "Property identity / functions",
        weight: "Supporting",
        validTime: "Checked Oct 6, 2026",
        href: "https://www.hilton.com/en/hotels/msynhhh-hilton-new-orleans-riverside/events/",
        note: "Hilton confirms 1,622 rooms, 55 meeting rooms and 137,923 sq. ft. event space. Capacity is not current occupancy.",
        private: false
      },
      {
        title: "NorthStar property compendium",
        authority: "Historical property record",
        role: "Historical property record",
        weight: "Reconfirmation input",
        validTime: "Assessed June 2019; cover updated Apr 2024",
        href: "",
        note: "474-page supplied PLAC. Retain page-specific dates; no current equipment, contact or condition certification.",
        private: true
      },
      {
        title: "Park Q2 2026 results",
        authority: "Capital-work context",
        role: "Capital-work context",
        weight: "Supporting",
        validTime: "Published Aug 6, 2026",
        href: "https://www.pkhotelsandresorts.com/investors/news-and-events/press-releases/2026/08-06-2026-211554607",
        note: "Final main-tower renovation phase expected to finish in Q4. Confirm actual work status and temporary openings.",
        private: false
      },
      {
        title: "NWS New Orleans / NOLA Ready",
        authority: "Local reasoning / preparedness",
        role: "Local reasoning / preparedness",
        weight: "High planning value",
        validTime: "AFD Oct 6, 5:55 a.m. CDT",
        href: "https://www.weather.gov/lix/",
        note: "AFD supports track uncertainty. City road and rain links appear in exposure section; no current route or order is certified.",
        private: false
      },
      {
        title: "Tropical Tidbits model views",
        authority: "Model context",
        role: "Model context",
        weight: "Supporting",
        validTime: "00Z Oct 6; valid Oct 10, 7 a.m. CDT",
        href: "https://www.tropicaltidbits.com/analysis/models/",
        note: "Comparable pressure time slice; rain-rate products differ. GFS and GEFS share lineage. These are dated comparison snapshots.",
        private: false
      }
    ]
  },
  readinessImage: {
    image: "assets/hilton-readiness.png",
    alt: "Hotel planning sequence: confirm essential services before Friday; StormGeo New Orleans guidance peaks at 53 mph gust with 26 percent chance of sustained 39 mph winds; assess after passage.",
    headline: "A shared sequence for hotel readiness.",
    summary: "Use this visual to align guest services, engineering and response coordination.",
    caption: "Imagegen summary of the supplied guidance and planning sequence. StormGeo Advisory 1 valid Oct 6, 9 a.m. CDT. Area guidance, not a hotel-specific wind or damage prediction."
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
  },
  exposureMap: {
    headline: "Riverfront location. Several operating interfaces.",
    summary: "Use the map to orient the hotel team around Poydras Street, Convention Center Boulevard and the riverfront. Verify today’s entrances, work zones and drainage on site.",
    image: "assets/hilton-property-context.png",
    alt: "Historical Google Earth aerial from the supplied PLAC showing Hilton New Orleans Riverside, Poydras Street, Convention Center Boulevard and the Mississippi River. It does not depict forecast flooding.",
    caption: "Historical property context — PLAC PDF p. 189; Google Earth ©2018 Google, capture date unverified. Address and riverfront setting rechecked with Hilton Oct 6, 2026. This image does not establish current roofs, access, elevations or flood exposure."
  },
  placReview: {
    headline: "Keep the useful context. Reconfirm the operating facts.",
    summary: "The PLAC was assessed June 19, 2019 and marked updated April 2024. Its July 2019 findings and older appendices are not a current condition survey.",
    columns: [
      "Topic",
      "What the record establishes",
      "Action for this event"
    ],
    rows: [
      [
        "Property identity",
        "Hilton independently confirms Two Poydras Street and 1,622 rooms.",
        "Use current occupancy and event counts for the plan."
      ],
      [
        "Backup power",
        "Legacy generator ratings conflict; load and runtime evidence is incomplete.",
        "Engineering to verify nameplates, served loads, testing and usable fuel."
      ],
      [
        "Water and access",
        "Historical site context identifies interfaces to inspect; old flood maps do not establish current risk.",
        "Confirm drainage, entry history, elevations and approved routes."
      ],
      [
        "Recent changes",
        "Park’s Aug 6 release expected the final main-tower renovation phase to finish in Q4 2026.",
        "Confirm current work areas, temporary openings and contractor responsibilities."
      ]
    ],
    note: "Do not reuse legacy sizing, flood-zone/elevation labels, contacts or vendor commitments as current facts. PLAC: PDF pp. 1–4, 9, 13–15, 189, 207–209. Blank fuel, water and systems fields mean unknown. Park’s schedule is a dated expectation."
  },
  localForecast: {
    headline: "Official forecast near the hotel.",
    summary: "NWS point request approximately 0.83 km northwest of the hotel reference. Updated Oct 6 at 1:57 a.m. CDT; forecast valid through Oct 12 at 6 p.m. CDT.",
    columns: [
      "Period · CDT",
      "Sustained wind",
      "Gusts",
      "Rain signal"
    ],
    rows: [
      [
        "Fri Oct 9",
        "NE 15–20 mph",
        "30 mph",
        "40% chance"
      ],
      [
        "Fri night",
        "NE around 15 mph",
        "30 mph",
        "50% chance"
      ],
      [
        "Sat Oct 10",
        "E around 20 mph",
        "30 mph",
        "Showers likely"
      ],
      [
        "Sat night",
        "NE 10–15 mph",
        "25 mph",
        "Chance of showers"
      ]
    ],
    note: "Nearby gridded guidance, not rooftop wind. No hotel rainfall amount, flood depth or exact warning intersection was verified. Keep this product separate from StormGeo’s New Orleans profile; do not average their gust values.",
    sourceHref: "https://forecast.weather.gov/MapClick.php?lat=29.9511&lon=-90.0715",
    sourceLabel: "Open current NWS vicinity forecast"
  }
};
