const embedOptions = {
  actions: false,
  renderer: "svg"
};


/* Section 1 - Australia's Outdoor Lifestyle */

vegaEmbed(
  "#activity_lollipop",
  "visualisations/01_activity_lollipop.vg.json",
  embedOptions
).catch(console.error);


/* Section 2 - Who Gets Outdoors? */

vegaEmbed(
  "#gender_pictogram",
  "visualisations/02_gender_pictogram.vg.json",
  embedOptions
).catch(console.error);


vegaEmbed(
  "#gender_activity_dumbbell",
  "visualisations/03_gender_activity_dumbbell.vg.json",
  embedOptions
).catch(console.error);


vegaEmbed(
  "#age_activity_heatmap",
  "visualisations/04_age_activity_heatmap.vg.json",
  embedOptions
).catch(console.error);


/* Section 3 - One Country, Different Ways to Get Outside */

vegaEmbed(
  "#state_activity_map",
  "visualisations/05_state_choropleth.vg.json",
  embedOptions
).catch(console.error);


vegaEmbed(
  "#state_profiles",
  "visualisations/06_state_profiles.vg.json",
  embedOptions
).catch(console.error);


/* Section 4 - Why Do Australians Get Active? */

vegaEmbed(
  "#motivation_bar",
  "visualisations/07_motivation_bar.vg.json",
  embedOptions
).catch(console.error);


/* Section 5 - Into Australia's Wild Places */

vegaEmbed(
  "#national_parks_map",
  "visualisations/08_national_parks_map.vg.json",
  embedOptions
).catch(console.error);


vegaEmbed(
  "#largest_parks",
  "visualisations/09_largest_parks.vg.json",
  embedOptions
).catch(console.error);


/* Section 6 - Australia's Protected Outdoors */

vegaEmbed(
  "#protected_area_change",
  "visualisations/10_protected_area_change.vg.json",
  embedOptions
).catch(console.error);


vegaEmbed(
  "#protected_area_comparison",
  "visualisations/11_protected_area_comparison.vg.json",
  embedOptions
).catch(console.error);


/* Section 7 - Economic Activity of the Outdoors */

vegaEmbed(
  "#sports_recreation_output",
  "visualisations/12_sports_recreation_output.vg.json",
  embedOptions
).catch(console.error);


vegaEmbed(
  "#tourism_gdp",
  "visualisations/13_tourism_gdp.vg.json",
  embedOptions
).catch(console.error);


/* Section 8 - More Than Just Recreation */

vegaEmbed(
  "#volunteer_waffle",
  "visualisations/14_volunteer_waffle.vg.json",
  embedOptions
).catch(console.error);


vegaEmbed(
  "#volunteer_roles",
  "visualisations/15_volunteer_roles.vg.json",
  embedOptions
).catch(console.error);