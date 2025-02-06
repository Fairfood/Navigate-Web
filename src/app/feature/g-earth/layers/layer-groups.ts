export const layer_groups = [
    {
        "order": 1,
        "layerGroupId": "GROUP_CLIMATE",
        "dataLayer": {
            "id": "CARBON_SEQ",
            "order": 1,
            "type": "remoteDataLayer",
            "uuid": "e7208398-0acd-4f73-a824-c4fe1e356e0c",
            "groupId": "GROUP_CLIMATE"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "function": "<p>Estimates the rate at which carbon could be sequestered in aboveground live biomass during the first thirty years of natural forest regrowth across all forest and savanna biomes, regardless of the current land cover or potential for reforestation (Mg carbon/ha/yr). </p>",
                    "geographic_coverage": "<p>Global, within forest and savanna biomes</p>",
                    "download_data": "https://www.arcgis.com/home/item.html?id=2b1e75c7d6274e448954178b3bc31bea",
                    "map_service": "",
                    "subtitle": "1 km, global, Cook-Patton et al. 2020 ",
                    "license": "<p>[CC BY 4.0] (https://creativecommons.org/licenses/by/4.0/)</p>",
                    "title": "Carbon accumulation potential from natural forest regrowth in forest and savanna biomes",
                    "agol_id": "2b1e75c7d6274e448954178b3bc31bea",
                    "overview": "<p>This map shows the rate at which forests could capture carbon from the atmosphere and store it in aboveground live biomass over the first 30 years of natural forest regrowth. It was created by combining ground-based measurements at thousands of locations around the world with 66 co-located environmental covariate layers in a machine learning model to produce a wall-to-wall map. Forest plot data used to train the model are sourced from published literature, which can be found in the Forest Carbon database (ForC, maintained by the Smithsonian Institute (https://github.com/forc-db)), as well as georeferenced data from publicly available national forest inventories. Rates were estimated over all forest and savanna biomes globally, regardless of current land cover or potential for reforestation.</p>",
                    "citation": "<p>Cook-Patton, S.C., Leavitt, S.M., Gibbs, D. et al. Mapping carbon accumulation potential from global natural forest regrowth. Nature 585, 545–550 (2020). https://doi.org/10.1038/s41586-020-2686-x</p>",
                    "cautions": "<p>•   Values represent best estimates but contain uncertainty. Accuracy of results depend on data availability for model training, which is concentrated in ten countries. The uncertainty map associated with this data layer can be downloaded from GFW’s Open Data Portal.<br>•   Carbon accumulation rates are applicable to natural forest regrowth only, and do not apply to other active restoration methods (agroforestry, plantations, etc.) <br>•   Carbon accumulation rates are linear and averaged over first 30 years of regrowth. Extending beyond 30 years will over-estimate sequestration.<br>•   Rates reflect carbon accumulation in aboveground live biomass only. Accumulation in belowground biomass, dead organic matter and soil organic carbon are not included but a belowground carbon accumulation map is available upon request.<br>•   In savannas, rates only apply to forested portions of these grassland-forest matrices.<br>•   These data are not a substitute for detailed site-level assessments of forest regrowth potential. </p>",
                    "date_of_content": "<p>Applicable to the first 30 years of natural forest regrowth. </p>",
                    "learn_more": "",
                    "source": "<p>Cook-Patton, S.C., S.M. Leavitt, D. Gibbs, N.L. Harris, K. Lister, K.J. Anderson-Teixeira, R.D. Briggs, R.L. Chazdon, T.W. Crowther, P.W. Ellis, H.P. Griscom, V. Herrmann, K.D. Holl, R.A. Houghton, C. Larrosa, G. Lomax, R. Lucas, P. Madsen, Y. Malhi, A. Paquette, J.D. Parker, K. Paul, D. Routh, S. Roxburgh, S. Saatchi, J.van den Hoogen, W.S. Walker, C.E. Wheeler, S.A. Wood, L. Xu, B.W. Griscom. 2020. Mapping carbon accumulation potential from natural forest regrowth. Nature, in press. https://www.nature.com/articles/s41586-020-2686-x. This work resulted from a collaboration between The Nature Conservancy, World Resources Institute, and 18 other institutions. </p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>1 × 1 km</p>",
                    "frequency_of_updates": "<p>NA</p>",
                    "tags": "Forest Change"
                },
                "legendConfig": {
                    "type": "gradient",
                    "name": {
                        "en": "Potential carbon sequestration rate",
                        "fr": "Taux potentiel de séquestration du carbone",
                        "es": "Tasa potencial de captura de carbono",
                        "pt": "Taxa potencial de sequestro de carbono",
                        "id": "Potensi tingkat penyerapan karbon",
                        "zh": "潜在的碳封存率",
                        "ka": "Potential carbon sequestration rate"
                    },
                    "source": "(reforestable areas, 1 km, Cook-Patton et al. 2020)",
                    "items": [
                        {
                            "name": {
                                "zh": "6.0 Mg C Ha⁻¹ yr⁻¹",
                                "pt": "6.0 Mg C Ha⁻¹ yr⁻¹",
                                "ka": "6.0 Mg C Ha⁻¹ yr⁻¹",
                                "id": "6.0 Mg C Ha⁻¹ yr⁻¹",
                                "fr": "6.0 Mg C Ha⁻¹ yr⁻¹",
                                "es": "6.0 Mg C Ha⁻¹ yr⁻¹",
                                "en": "6.0 Mg C Ha⁻¹ yr⁻¹"
                            },
                            "color": "#08431E"
                        },
                        {
                            "name": {
                                "zh": "",
                                "pt": "",
                                "ka": "",
                                "id": "",
                                "fr": "",
                                "es": "",
                                "en": ""
                            },
                            "color": "#649D46"
                        },
                        {
                            "name": {
                                "zh": "0.06",
                                "pt": "0.06",
                                "ka": "0.06",
                                "id": "0.06",
                                "fr": "0.06",
                                "es": "0.06",
                                "en": "0.06"
                            },
                            "color": "#F6F2C4"
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "id": "CARBON_SEQ",
            "type": "imagery",
            "url": "https://tiles.globalforestwatch.org/gfw_potential_carbon_sequestration_rate/v1/aboveground__reforestable_areas/{z}/{x}/{y}.png",
            "technicalName": "carbon_sequestration",
            "label": {
                "en": "Potential carbon sequestration rate",
                "fr": "Taux potentiel de séquestration du carbone",
                "es": "Tasa potencial de captura de carbono",
                "pt": "Taxa potencial de sequestro de carbono",
                "id": "Potensi tingkat penyerapan karbon",
                "zh": "潜在的碳封存率",
                "ka": "Potential carbon sequestration rate"
            },
            "sublabel": {
                "en": "(reforestable areas, 1 kilometer, Cook-Patton et al. 2020)",
                "fr": "(zones reboisables, 1 kilomètre, Cook-Patton et al. 2020)",
                "es": "(áreas reforestables, 1 kilómetro, Cook-Patton et al. 2020)",
                "pt": "(áreas de reflorestamento, 1 quilómetro, Cook-Patton et al. 2020)",
                "id": "(area yang dapat dihutankan kembali, 1 kilometer, Cook-Patton et al. 2020)",
                "ka": "(reforestable areas, 1 km, Cook-Patton et al. 2020)"
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 3,
        "layerGroupId": "GROUP_CLIMATE",
        "dataLayer": {
            "id": "DRY_SPELLS",
            "order": 3,
            "type": "remoteDataLayer",
            "uuid": "41936f95-094b-4ad9-8b8a-70fc159bd0ba",
            "groupId": "GROUP_CLIMATE"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "title": "PROJECTED CHANGE IN DRY SPELLS",
                    "subtitle": " ",
                    "function": "Projected change in average annual dry spells",
                    "resolution": "0.25 degree x 0.25 degree",
                    "geographic_coverage": "Global",
                    "source": "WRI/Vizzuality",
                    "frequency_of_updates": "",
                    "cautions": "- Some GCM perform better than others in recreating regional climate patterns, such as monsoons, in hindcasts. For specific applications, it may be appropriate to select individual models based on regional performance. - The downscaling approaches used to produce these indicators inherently assume that the relative spatial patterns in temperature and precipitation will remain constant under future climate change. Dramatic shifts in global weather patterns, such as the slowing or reversal of major air and ocean currents are possible, but will not be captured in these indicators. - The historical data used for downscaling varies in quality across the world. In particular, areas that have short records or sparse coverage of in situ weather observations may have reduced accuracy. - Because GCM are developed by independent research teams and incorporate different assumptions and mechanisms, it is likely that they cover a substantial range of probable futures. We provide both low and high estimates so that users can see and evaluate this likely range of outcomes.",
                    "license": "[Attribution Required](https://www.wri.org/publications/permissions-licensing)",
                    "overview": "The Projected Change in Dry Spells dataset shows change in average annual dry spells at ten year intervals between 2000 and 2080, compared to a baseline time period of 1960-1990. A dry spell is a five day period with less than 1 millimeter (mm) of precipitation. The data shown at each ten year interval represents a 31-year average, centered around the indicated year. For example, the number of dry spells in 2000 is actually an average of the annual number of dry spells between the years 1985 and 2015. Precipitation projections are based on the future greenhouse gas emission rates determined by the Intergovernmental Panel on Climate Change’s (IPCC’s) Representative Concentration Pathways (RCP) 8.5. RCP 8.5 is a hypothetical scenario where there is no decrease in greenhouse gas emission rates within the 21st century. Change in dry spells is shown as the multiplicative difference between annual average dry spells during the projected decade and the baseline time period. Values greater than 1 indicate that the number of dry spells is increasing, while values less than one indicate that the number is decreasing. The dataset is shown at a spatial resolution of 0.25°.The increase in global greenhouse gas concentrations, and the resulting change in climate, is set to fundamentally alter our relationship with the planet, impacting agriculture, infrastructure, disaster management, and human conflict. In order to anticipate and adapt to these changes, the Projected Change in Dry Spells dataset provides projections on how precipitation patterns are likely to change in the coming decades. This dataset improves the accessibility of climate data by summarizing global climate information and providing the information as an open dataset in a common geospatial format.This dataset has been processed by Vizzuality and the World Resources Institute using the National Aeronautics and Space Administration (NASA) Earth Exchange Global Daily Downscaled Projections (NEX-GDDP). The NEX-GDDP dataset is intended to assist the scientific community in conducting studies of climate change impacts at local to regional scales, and to enhance public understanding of possible future global climate patterns at the spatial scale of individual towns, cities, and watersheds. A previous version of this dataset was processed and produced by the [Partnership for Resilience and Preparedness (PREP)](https://prepdata.org/), aiding in PREP’s mission to build resilience to climate change by improving access to climate data.",
                    "citation": "Gassert, F., E. Cornejo, and E. Nilson. 2021. “Making Climate Data Accessible: Methods for Producing NEX-GDDP and LOCA Downscaled Climate Indicators” Technical Note. Washington, DC: World Resources Institute. Available online at https://www.wri.org/research/making-climate-data-accessible. [www.resourcewatch.org](https://www.resourcewatch.org/). We acknowledge the World Climate Research Programme's Working Group on Coupled Modelling, which is responsible for CMIP, and we thank the climate modeling groups for producing and making available their model output. The U.S. Department of Energy's Program for Climate Model Diagnosis and Intercomparison provides coordinating support and development of software infrastructure in partnership with the Global Organization for Earth System Science Portals for CMIP. Climate scenarios used were from the NEX-GDDP dataset, prepared by the Climate Analytics Group and NASA Ames Research Center using the NASA Earth Exchange, and distributed by the NASA Center for Climate Simulation (NCCS).",
                    "tags": [
                        "geospatial",
                        "global",
                        "time_period",
                        "future",
                        "annual",
                        "climate",
                        "climate_changed",
                        "rough",
                        "raster"
                    ],
                    "other": "",
                    "learn_more": "",
                    "date_of_content": "",
                    "content_date_range": ""
                },
                "legendConfig": {
                    "name": {
                        "en": "2030 Projected Change in Dry Spells",
                        "es": "2030 Cambio proyectado en los periodos de sequía",
                        "fr": "2030 Changement prévu des périodes de sécheresse",
                        "id": "2030 Proyeksi Perubahan Musim Kering",
                        "ka": "2030 Projected Change in Dry Spells",
                        "pt": "2030 Mudança Projetada em Feitiços Secos",
                        "zh": "2030年预测的旱季变化"
                    },
                    "type": "gradient",
                    "items": [
                        {
                            "color": "rgb(5, 113, 176)",
                            "name": {
                                "en": "0×",
                                "fr": "0×",
                                "es": "0×",
                                "pt": "0×",
                                "id": "0×",
                                "zh": "0×",
                                "ka": "0×"
                            }
                        },
                        {
                            "color": "rgb(146, 197, 222)",
                            "name": {
                                "en": "0.5×",
                                "fr": "0.5×",
                                "es": "0.5×",
                                "pt": "0.5×",
                                "id": "0.5×",
                                "zh": "0.5×",
                                "ka": "0.5×"
                            }
                        },
                        {
                            "color": "rgb(247, 247, 247)",
                            "name": {
                                "en": "1×",
                                "fr": "1×",
                                "es": "1×",
                                "pt": "1×",
                                "id": "1×",
                                "zh": "1×",
                                "ka": "1×"
                            }
                        },
                        {
                            "color": "rgb(232, 61, 88)",
                            "name": {
                                "en": "≥2×",
                                "fr": "≥2×",
                                "es": "≥2×",
                                "pt": "≥2×",
                                "id": "≥2×",
                                "zh": "≥2×",
                                "ka": "≥2×"
                            }
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "id": "DRY_SPELLS",
            "type": "base-tile-layer",
            "url": "https://tiles.globalforestwatch.org/nexgddp_change_dry_spells_2000_2080/v20211015/Change_Num_Dry_Spells_2030/{z}/{x}/{y}.png",
            "technicalName": "nexgddp_change_dry_spells_2000_2080",
            "label": {
                "en": "Projected Change in Dry Spells",
                "es": "Proyección de cambio en los periodos de sequía",
                "fr": "Évolution prévue des périodes de sécheresse",
                "id": "Proyeksi Perubahan Musim Kemarau",
                "ka": "Projected Change in Dry Spells",
                "pt": "Mudança Projetada em Feitiços Secos",
                "zh": "旱季的预测变化"
            },
            "sublabel": {
                "en": "0.25°, global, 2000-2080, WRI/Vizzuality",
                "es": "0.25°, global, 2000-2080, WRI/Vizzuality",
                "fr": "0,25°, mondial, 2000-2080, WRI/Vizzuality",
                "id": "0.25°, global, 2000-2080, WRI/Vizzuality",
                "ka": "0.25°, global, 2000-2080, WRI/Vizzuality",
                "pt": "0.25°, global, 2000-2080, WRI/Vizzuality",
                "zh": "0.25°，全球，2000-2080，WRI/Vizzuality"
            }
        },
        "isError": false
    },
    {
        "order": 3,
        "layerGroupId": "GROUP_CLIMATE",
        "dataLayer": {
            "id": "AIR_QUALITY",
            "order": 3,
            "type": "remoteDataLayer",
            "uuid": "67d8aed9-8eb3-4396-99a4-f0eee7295226",
            "groupId": "GROUP_CLIMATE"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "title": "Air Quality: Nitrogen Dioxide (NO₂) Satellite Measurements",
                    "subtitle": " ",
                    "function": "Average monthly density of nitrogen dioxide (NO₂) in the troposphere",
                    "resolution": "3.5 x 5.5 km",
                    "geographic_coverage": "Global",
                    "source": "TROPOMI/ESA/KNMI/DLR/SRON/BIRA-IASB/STFC/MPIC/S[&]T/Uni-Bremen",
                    "frequency_of_updates": "Monthly",
                    "cautions": "The current surface albedo climatology used has a spatial resolution of 0.5° x 0.5° (approximately 55 x 55 km), which is coarse compared to the much higher spatial resolution used by S5p TROPOMI of 3.5 x 5.5 km. As a consequence, the albedo grid affects the NO₂ column products quality, especially in coastal areas. In general, TROPOMI underestimates the tropospheric NO₂ densities at polluted sites. The median negative biases of the daily comparisons are generally less than 50% (the product requirement for tropospheric NO₂), but can be quite variable depending on station and NO₂ level. Good coherence is found between TROPOMI and Multi Axis Differential Absorption Spectroscopy (MAX-DOAS) NO₂ datasets with a correlation coefficient of 0.84.For more information on the data quality, please see the [product readme file](https://sentinel.esa.int/documents/247904/3541451/Sentinel-5P-Nitrogen-Dioxide-Level-2-Product-Readme-File).",
                    "license": "[Attribution required](https://sentinel.esa.int/documents/247904/690755/Sentinel_Data_Legal_Notice)",
                    "overview": "The Air Quality: NO₂ Satellite Measurements dataset provides global monthly averages of nitrogen dioxide (NO₂) density in the troposphere. Each value shown in the dataset represents the density of NO₂ between Earth’s surface and the top of the troposphere. The NO₂ density is reported with units of moles of NO₂ per square meter of air (mol/m²).Nitrogen dioxide (NO₂) is one of the most common compounds in the nitrogen oxides (NOx) group. Other nitrogen oxides include nitric acid (HNO₃) and nitric oxide (NO). NO₂ is used as the indicator for the larger group of nitrogen oxides, meaning if NO₂ is present it is likely other nitrogen oxides are as well. NO₂ is primarily created by the burning of fuel, which can be from cars, trucks and buses, power plants, and off-road equipment. Breathing air with a high concentration of NO₂ can irritate airways in the human respiratory system. Acute exposures can aggravate respiratory diseases, particularly asthma, leading to respiratory symptoms, like coughing, wheezing or difficulty breathing. Longer chronic exposures to elevated concentrations of NO₂ may contribute to the development of asthma and potentially increase susceptibility to respiratory infections. People with asthma, as well as children and the elderly are generally at greater risk for the health effects of NO₂.The dataset is made up of data collected from the Sentinel-5 Precursor (S5p) mission, a low Earth orbit polar satellite system. The S5p mission is part of the Global Monitoring of the Environment and Security (GMES/COPERNICUS) space component program headed by the European Commission (EC) in partnership with the European Space Agency (ESA). Its goal is to  provide information and services on air quality, climate, and the ozone layer. The S5p mission includes the TROPOspheric Monitoring Instrument (TROPOMI), which takes daily global observations of key atmospheric components, such as NO₂, at a 5.5 x 3.5 kilometer (km) resolution.Resource Watch also shows TROPOMI data for [carbon monoxide (CO)](https://resourcewatch.org/data/explore/Air-Quality-Measurements-TROPOMI-CO), [ozone (O₃)](https://resourcewatch.org/data/explore/Air-Quality-Measurements-TROPOMI-O), and [absorbing aerosol index (AAI)](https://resourcewatch.org/data/explore/Air-Quality-Measurements-TROPOMI-AER-AI).",
                    "citation": "European Space Agency. 2018. ESA Sentinel-5P TROPOMI L3 products. Accessed through Resource Watch, (date). [www.resourcewatch.org](https://www.resourcewatch.org).",
                    "tags": [
                        "geospatial",
                        "global",
                        "air_quality",
                        "raster",
                        "historical",
                        "pollution",
                        "health",
                        "near_real_time",
                        "SDG_11_Sustainable_Cities_and_Communities",
                        "SDG_target_11.6"
                    ],
                    "other": "",
                    "learn_more": "https://sentinel.esa.int/web/sentinel/missions/sentinel-5p",
                    "date_of_content": "2022-05-18 - 2022-06-17",
                    "content_date_range": {
                        "min": "2022-05-18",
                        "max": "2022-06-17"
                    }
                },
                "legendConfig": {
                    "name": {
                        "en": "Latest Months Average Tropospheric Nitrogen Dioxide (NO₂) (mol/m², millionths)",
                        "fr": "Moyenne des derniers mois du dioxyde d'azote troposphérique (NO₂) (mol/m², millionièmes)",
                        "es": "Promedio de los últimos meses de dióxido de nitrógeno troposférico (NO₂) (mol/m², millonésimas)",
                        "pt": "Meses mais recentes Dióxido de azoto troposférico médio (NO₂) (mol/m², milionésimos)",
                        "id": "Rata-rata Nitrogen Dioksida (NO₂) Troposfer Bulan Terakhir (mol/m², juta-an)",
                        "zh": "最近几个月平均对流层二氧化氮（NO₂）（mol/m²，百万分之一）",
                        "ka": "Latest Months Average Tropospheric Nitrogen Dioxide (NO₂) (mol/m², millionths)"
                    },
                    "type": "gradient",
                    "items": [
                        {
                            "color": "rgb(0, 0, 3)",
                            "name": {
                                "en": "≤5",
                                "fr": "≤5",
                                "es": "≤5",
                                "pt": "≤5",
                                "id": "≤5",
                                "zh": "≤5",
                                "ka": "≤5"
                            }
                        },
                        {
                            "color": "rgb(85, 15, 109)",
                            "name": {
                                "en": "10",
                                "fr": "10",
                                "es": "10",
                                "pt": "10",
                                "id": "10",
                                "zh": "10",
                                "ka": "10"
                            }
                        },
                        {
                            "color": "rgb(186, 54, 85)",
                            "name": {
                                "en": "30",
                                "fr": "30",
                                "es": "30",
                                "pt": "30",
                                "id": "30",
                                "zh": "30",
                                "ka": "30"
                            }
                        },
                        {
                            "color": "rgb(249, 140, 9)",
                            "name": {
                                "en": "100",
                                "fr": "100",
                                "es": "100",
                                "pt": "100",
                                "id": "100",
                                "zh": "100",
                                "ka": "100"
                            }
                        },
                        {
                            "color": "rgb(252, 254, 164)",
                            "name": {
                                "en": "≥300",
                                "fr": "≥300",
                                "es": "≥300",
                                "pt": "≥300",
                                "id": "≥300",
                                "zh": "≥300",
                                "ka": "≥300"
                            }
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "id": "AIR_QUALITY",
            "type": "base-tile-layer",
            "url": "https://tiles.globalforestwatch.org/tropomi_avg_nitrogen_dioxide_last_month/latest/default/{z}/{x}/{y}.png",
            "technicalName": "tropomi_nitrogen_dioxide",
            "label": {
                "en": "Air Quality: Nitrogen Dioxide (NO₂) Satellite Measurements",
                "fr": "Qualité de l'air : Mesures satellitaires du dioxyde d'azote (NO₂)",
                "es": "Calidad del aire: Mediciones de dióxido de nitrógeno (NO₂) por satélite",
                "pt": "Qualidade do ar: Dióxido de Azoto (NO₂) Medições por satélite",
                "id": "Kualitas Udara: Pengukuran Satelit Nitrogen Dioksida (NO₂)",
                "zh": "空气质量。二氧化氮（NO₂）卫星测量",
                "ka": "Air Quality: Nitrogen Dioxide (NO₂) Satellite Measurements"
            },
            "sublabel": {
                "en": "3.5 x 5.5 km, global, 2018, TROPOMI/ESA/KNMI/DLR/SRON/BIRA-IASB/STFC/MPIC/S[&]T/Uni-Bremen",
                "fr": "3.5 x 5.5 km, global, 2018, TROPOMI/ESA/KNMI/DLR/SRON/BIRA-IASB/STFC/MPIC/S[&]T/Uni-Bremen",
                "es": "3.5 x 5.5 km, global, 2018, TROPOMI/ESA/KNMI/DLR/SRON/BIRA-IASB/STFC/MPIC/S[&]T/Uni-Bremen",
                "pt": "3.5 x 5.5 km, global, 2018, TROPOMI/ESA/KNMI/DLR/SRON/BIRA-IASB/STFC/MPIC/S[&]T/Uni-Bremen",
                "id": "3.5 x 5.5 km, global, 2018, TROPOMI/ESA/KNMI/DLR/SRON/BIRA-IASB/STFC/MPIC/S[&]T/Uni-Bremen",
                "zh": "3.5 x 5.5 km, 全球, 2018, TROPOMI/ESA/KNMI/DLR/SRON/BIRA-IASB/STFC/MPIC/S[&]T/Uni-Bremen",
                "ka": "3.5 x 5.5 km, global, 2018, TROPOMI/ESA/KNMI/DLR/SRON/BIRA-IASB/STFC/MPIC/S[&]T/Uni-Bremen"
            }
        },
        "isError": false
    },
    {
        "order": 4,
        "layerGroupId": "GROUP_CLIMATE",
        "dataLayer": {
            "id": "WIND_SPEED",
            "order": 4,
            "type": "remoteDataLayer",
            "uuid": "9fa60bd9-0643-4d0a-a569-0036e902d1f9",
            "groupId": "GROUP_CLIMATE"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "title": "Wind Speed Potential",
                    "subtitle": " ",
                    "function": "Mean wind speed for any location on Earth",
                    "resolution": "1 km x 1 km",
                    "geographic_coverage": "Global",
                    "source": "DTU/World Bank Group/ESMAP",
                    "frequency_of_updates": "",
                    "cautions": "The GWA uses two major modeling components that can introduce uncertainty into the calculations. These components are the mesoscale modeling and the microscale modeling.",
                    "license": "[Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)",
                    "overview": "Additional Information Resource Watch shows only a subset of the dataset. For access to the full dataset and additional information, click on the “Learn more” button.",
                    "citation": "(Data/information/map obtained from the) Global Wind Atlas 2.0, a free, web-based application developed, owned and operated by the Technical University of Denmark (DTU) in partnership with the World Bank Group, utilizing data provided by Vortex, with funding provided by the Energy Sector Management Assistance Program (ESMAP). For additional information: https://globalwindatlas.info. Accessed through Resource Watch, (date). [www.resourcewatch.org](https://www.resourcewatch.org).",
                    "tags": [
                        "raster",
                        "wind_energy",
                        "wind",
                        "renewable_energy",
                        "SDG_7_Affordable_and_Clean_Energy",
                        "energy",
                        "historical",
                        "geospatial",
                        "global",
                        "energy_production"
                    ],
                    "other": "",
                    "learn_more": "",
                    "date_of_content": "",
                    "content_date_range": {
                        "min": "2022-05-18",
                        "max": "2022-06-17"
                    }
                },
                "legendConfig": {
                    "name": {
                        "en": "Wind Speed Potential at 50m (m/s)",
                        "es": "Potencial de velocidad del viento a 50 m (m/s)",
                        "fr": "Potentiel de vitesse du vent à 50m (m/s)",
                        "id": "Potensi Kecepatan Angin pada 50m (m/s)",
                        "ka": "Wind Speed Potential at 50m (m/s)",
                        "pt": "Potencial de Velocidade do Vento a 50m (m/s)",
                        "zh": "50米处的风速潜力（米/秒）"
                    },
                    "type": "gradient",
                    "items": [
                        {
                            "color": "rgb(237, 248, 177)",
                            "name": {
                                "en": "≤1",
                                "fr": "≤1",
                                "es": "≤1",
                                "pt": "≤1",
                                "id": "≤1",
                                "zh": "≤1",
                                "ka": "≤1"
                            }
                        },
                        {
                            "color": "rgb(199, 233, 180)",
                            "name": {
                                "en": "≤3",
                                "fr": "≤3",
                                "es": "≤3",
                                "pt": "≤3",
                                "id": "≤3",
                                "zh": "≤3",
                                "ka": "≤3"
                            }
                        },
                        {
                            "color": "rgb(65, 182, 196)",
                            "name": {
                                "en": "≤6",
                                "fr": "≤6",
                                "es": "≤6",
                                "pt": "≤6",
                                "id": "≤6",
                                "zh": "≤6",
                                "ka": "≤6"
                            }
                        },
                        {
                            "color": "rgb(34, 94, 168)",
                            "name": {
                                "en": "≤10",
                                "fr": "≤10",
                                "es": "≤10",
                                "pt": "≤10",
                                "id": "≤10",
                                "zh": "≤10",
                                "ka": "≤10"
                            }
                        },
                        {
                            "color": "rgb(12, 44, 132)",
                            "name": {
                                "en": ">10",
                                "fr": ">10",
                                "es": ">10",
                                "pt": ">10",
                                "id": ">10",
                                "zh": ">10",
                                "ka": ">10"
                            }
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "id": "WIND_SPEED",
            "type": "base-tile-layer",
            "url": "https://tiles.globalforestwatch.org/dtu_wb_wind_speed_potential_2001_2010/latest/default/{z}/{x}/{y}.png",
            "technicalName": "dtu_wb_wind_speed_potential_2001_2010",
            "label": {
                "en": "Wind Speed Potential",
                "es": "Potencial de velocidad del viento",
                "fr": "Potentiel de vitesse du vent",
                "id": "Potensi Kecepatan Angin",
                "ka": "Wind Speed Potential",
                "pt": "Potencial de Velocidade do Vento",
                "zh": "风速潜力"
            },
            "sublabel": {
                "en": "1 km, global, DTU/World Bank Group/ESMAP",
                "es": "1 km, global, DTU/Grupo del Banco Mundial/ESMAP",
                "fr": "1 km, mondial, DTU/Groupe de la Banque mondiale/ESMAP",
                "id": "1 km, global, DTU/Kelompok Bank Dunia/ESMAP",
                "ka": "1 km, global, DTU/World Bank Group/ESMAP",
                "pt": "1 km, global, DTU/Grupo do Banco Mundial/ESMAP",
                "zh": "1公里，全球，DTU/世界银行集团/ESMAP"
            }
        },
        "isError": false
    },
    {
        "order": 6,
        "layerGroupId": "GROUP_CLIMATE",
        "dataLayer": {
            "id": "FOREST_CARBON_GROSS_REMOVALS",
            "order": 6,
            "type": "remoteDataLayer",
            "uuid": "79010c83-e62e-4744-96ed-130736daa651",
            "groupId": "GROUP_CLIMATE"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "function": "<p>Displays forest carbon removals by forest sinks</p>",
                    "geographic_coverage": "<p>Global</p>",
                    "download_data": "https://data.globalforestwatch.org/datasets/94871bf57f544ea39e594feb92b06305",
                    "map_service": "",
                    "subtitle": "(2001-2023/30m/Harris et al. 2021) ",
                    "license": "",
                    "title": "Forest Carbon Removals",
                    "agol_id": "",
                    "overview": "<p>This carbon removals layer is part of the forest carbon flux model described in <a href=\"https://www.nature.com/articles/s41558-020-00976-6\">Harris et al. (2021)</a>. This paper introduces a geospatial monitoring framework for estimating global forest carbon fluxes which can assist a variety of actors and organizations with tracking greenhouse gas fluxes from forests and in decreasing emissions or increasing removals by forests. Forest carbon removals from the atmosphere (sequestration) by forest sinks represent the cumulative carbon captured (megagrams CO2/ha) by the growth of established and newly regrowing forests during the model period between 2001-2023. Removals include accumulation of carbon in both aboveground and belowground live tree biomass. Following IPCC Tier 1 assumptions for forests remaining forests, removals by dead wood, litter, and soil carbon pools are assumed to be zero. In each pixel, carbon removals are calculated following IPCC Guidelines for <a href=\"https://www.ipcc.ch/report/2019-refinement-to-the-2006-ipcc-guidelines-for-national-greenhouse-gas-inventories/\">national greenhouse gas inventories</a> where forests existed in 2000 or were established between 2000 and 2020 according to <a href=\"https://www.frontiersin.org/articles/10.3389/frsen.2022.856903/full\">Potapov et al. 2022</a>. Atmospheric carbon removed in each pixel is based on maps of forest type (e.g., mangrove, plantation), ecozone (e.g., humid Neotropics), forest age (e.g., primary, old secondary), and number of years of carbon removal. This layer reflects the cumulative removals during the model period (2001-2023) and must be divided by 23 to obtain an annual average during the model duration; removal rates cannot be assigned to individual years of the model. All input layers were resampled to a common resolution of 0.00025 x 0.00025 degrees each to match <a href=\"https://www.science.org/doi/10.1126/science.1244693\">Hansen et al. (2013)</a>.</p><p>Each year, the tree cover loss, <a href=\"https://gfw.global/39qbPdC\">drivers of tree cover loss</a>, and burned area are updated. In 2023 and 2024, a few model input data sets and constants were changed as well, as described below. Please refer to <a href=\"https://www.globalforestwatch.org/blog/data/whats-new-carbon-flux-monitoring/\">this blog post</a> for more information.  </p><br><ol><br><li>The source of the ratio between belowground biomass carbon and aboveground biomass carbon. Previously used one global constant; now uses map from <a href=\"https://essd.copernicus.org/articles/13/4263/2021/\">Huang et al. 2021</a></li><br><li>The years of tree cover gain. Previously used 2000-2012; now uses 2000-2020 from <a href=\"https://www.frontiersin.org/articles/10.3389/frsen.2022.856903/full\">Potapov et al. 2022</a>. </li><br><li>The source of fire data. Previously used MODIS burned area; now uses tree cover loss from fires from <a href=\"https://www.frontiersin.org/articles/10.3389/frsen.2022.825190/full\">Tyukavina et al. 2022</a>. </li><br><li>The source of peat maps. New tropical data sets have been included and the data set above 40 degrees north has been changed. </li><br><li>Global warming potential (GWP) constants for CH4 and N2O. Previously used GWPs from IPCC Fifth Assessment Report; now uses GWPs from IPCC <a href=\"https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_Chapter07.pdf\">Sixth Assessment Report</a>. </li><br><li>Removal factors for older (&gt;20 years) secondary temperate forests and their associated uncertainties. Previously used removal factors published in <a href=\"https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch04_Forest%20Land.pdf\">Table 4.9</a> of the 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories; now uses corrected removal factors and uncertainties from the 4th Corrigenda to the 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories. </li><br><li>Planted tree extent and removal factors. Previously used Spatial Database of Planted Trees (SDPT) <a href=\"https://www.wri.org/research/spatial-database-planted-trees-sdpt-version-10\">Version 1.0</a>; now uses <a href=\"https://www.wri.org/research/spatial-database-planted-trees-sdpt-version-2\">SDPT Version 2.0</a> and associated removal factors. </li><br></ol><br><p>Removals are available for download in two different area units over the model duration: 1) megagrams of CO2 removed/ha, and 2) megagrams of CO2 removed/pixel. The first is appropriate for visualizing (mapping) removals because it represents the density of removals per hectare. The second is appropriate for calculating the removals in an area of interest (AOI) because the values of the pixels in the AOI can be summed to obtain the total removals for that area. The values in the latter were calculated by adjusting the removals per hectare by the size of each pixel, which varies by latitude. When estimating removals occurring over a defined number of years between 2001 and 2023 to compare to emissions, divide total carbon removals by the model duration and then multiply by the number of years in the period of interest. Both datasets only include pixels within forests, as defined in the methods of Harris et al. (2021) and updated with tree cover gain through 2020.   </p>",
                    "citation": "<p>Harris et al. (2021). Global maps of 21st century forest carbon fluxes. Accessed on [date] from Global Forest Watch.</p>",
                    "cautions": "<ul><br><li>Data are the product of modeling and thus have an inherent degree of error and uncertainty. Users are strongly encouraged to read and fully comprehend the metadata and other available documentation prior to data use. </li><br><li>Values are applicable to forest areas (canopy cover &gt;30 percent and &gt;5 m height or areas with tree cover gain). See Harris et al. (2021) for further information on the forest definition used in the analysis. </li><br><li>Carbon removals reflect the total removals over the model period of 2001-2023, not an annual time series from which a trend can be derived. Thus, values must be divided by 23 to calculate average annual removals.   </li><br><li>Uncertainty is higher in gross removals than emissions, particularly driven by uncertainty in removal factors.  </li><br><li>Carbon removals reflect a gross estimate, i.e., carbon emissions from previous or subsequent loss of tree cover are not included. Instead, gross carbon emissions are accounted for in the companion forest carbon emissions layer. </li><br><li>Removals data contain temporal inconsistencies because tree cover gain represents a cumulative total from 2000-2020, rather than annual gains as estimated through 2023. </li><br><li>Forest carbon removals reflect those occurring only within forest ecosystems and do not reflect carbon stock increases in the harvested wood products (HWP) pool. </li><br><li>Large jumps in removals along some boundaries are due to the use of ecozone-specific removal factors. The changes in removals occur at ecozone boundaries, where different removal factors are applied on each side. </li><br><li>This dataset has been updated since its original publication. See Overview for more information.</li><br></ul>",
                    "date_of_content": "<p>2001-2023</p>",
                    "learn_more": "https://www.nature.com/articles/s41558-020-00976-6",
                    "source": "<p>Harris, N.L., D.A. Gibbs, A. Baccini, R.A. Birdsey, S. de Bruin, M. Farina, L. Fatoyinbo, M.C. Hansen, M. Herold, R.A. Houghton, P.V. Potapov, D. Requena Suarez, R.M. Roman-Cuesta, S.S. Saatchi, C.M. Slay, S.A. Turubanova, A. Tyukavina. 2021. Global maps of twenty-first century forest carbon fluxes. Nature Climate Change. <a href=\"https://doi.org/10.1038/s41558-020-00976-6\">https://doi.org/10.1038/s41558-020-00976-6</a></p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>30 × 30m</p>",
                    "frequency_of_updates": "<p>Annual</p>",
                    "tags": "Forest Change"
                },
                "legendConfig": {
                    "name": {
                        "en": "Forest carbon gross removals (2001-2023)",
                        "fr": "Retraits bruts de carbone en forêt",
                        "es": "Extracciones brutas de carbono en bosques",
                        "pt": "Remoções brutas de carbono florestal",
                        "id": "Penghapusan bruto karbon hutan",
                        "zh": "森林碳总去除量",
                        "ka": "Орман карбондық жалпы шығындар"
                    },
                    "type": "gradient",
                    "items": [
                        {
                            "color": "rgb(28, 68, 91)",
                            "name": {
                                "en": ">1500 tCO₂e ha⁻¹",
                                "fr": ">1500 tCO₂e ha⁻¹",
                                "es": ">1500 tCO₂e ha⁻¹",
                                "pt": ">1500 tCO₂e ha⁻¹",
                                "id": ">1500 tCO₂e ha⁻¹",
                                "zh": ">1500 tCO₂e ha⁻¹",
                                "ka": ">1500 tCO₂e ha⁻¹"
                            }
                        },
                        {
                            "color": "rgb(17, 122, 120)",
                            "name": {
                                "en": "",
                                "fr": "",
                                "es": "",
                                "pt": "",
                                "id": "",
                                "zh": "",
                                "ka": ""
                            }
                        },
                        {
                            "color": "rgb(209, 216, 197)",
                            "name": {
                                "en": "",
                                "fr": "",
                                "es": "",
                                "pt": "",
                                "id": "",
                                "zh": "",
                                "ka": ""
                            }
                        },
                        {
                            "color": "rgb(221, 224, 209)",
                            "name": {
                                "en": "",
                                "fr": "",
                                "es": "",
                                "pt": "",
                                "id": "",
                                "zh": "",
                                "ka": ""
                            }
                        },
                        {
                            "color": "rgb(255, 246, 244)",
                            "name": {
                                "en": "0",
                                "fr": "0",
                                "es": "0",
                                "pt": "0",
                                "id": "0",
                                "zh": "0",
                                "ka": "0"
                            }
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "id": "WRI_FOREST_CARBON_GROSS_REMOVALS",
            "type": "forest-carbon-gross-removals",
            "url": "https://tiles.globalforestwatch.org/gfw_forest_carbon_gross_removals/v20240308/tcd_30/{z}/{x}/{y}.png",
            "technicalName": "wri_forest_carbon_gross_removals",
            "label": {
                "en": "Forest carbon gross removals",
                "fr": "Retraits bruts de carbone en forêt",
                "es": "Extracciones brutas de carbono en bosques",
                "pt": "Remoções brutas de carbono florestal",
                "id": "Penghapusan bruto karbon hutan",
                "zh": "森林碳总去除量",
                "ka": "Орман карбондық жалпы шығындар"
            },
            "sublabel": {
                "en": "30m, global, 2001-2023, Harris et al. 2023",
                "fr": "30m, global, 2001-2023, Harris et al. 2023",
                "es": "30m, global, 2001-2023, Harris et al. 2023",
                "pt": "30m, global, 2001-2023, Harris et al. 2023",
                "id": "30m, global, 2001-2023, Harris et al. 2023",
                "zh": "30m, global, 2001-2023, Harris et al. 2023",
                "ka": "30m, global, 2001-2023, Harris et al. 2023"
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 6,
        "layerGroupId": "GROUP_CLIMATE",
        "dataLayer": {
            "id": "FOREST_CARBON_GROSS_REMOVALS",
            "order": 6,
            "type": "remoteDataLayer",
            "uuid": "79010c83-e62e-4744-96ed-130736daa651",
            "groupId": "GROUP_CLIMATE"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "function": "<p>Displays forest carbon removals by forest sinks</p>",
                    "geographic_coverage": "<p>Global</p>",
                    "download_data": "https://data.globalforestwatch.org/datasets/94871bf57f544ea39e594feb92b06305",
                    "map_service": "",
                    "subtitle": "(2001-2023/30m/Harris et al. 2021) ",
                    "license": "",
                    "title": "Forest Carbon Removals",
                    "agol_id": "",
                    "overview": "<p>This carbon removals layer is part of the forest carbon flux model described in <a href=\"https://www.nature.com/articles/s41558-020-00976-6\">Harris et al. (2021)</a>. This paper introduces a geospatial monitoring framework for estimating global forest carbon fluxes which can assist a variety of actors and organizations with tracking greenhouse gas fluxes from forests and in decreasing emissions or increasing removals by forests. Forest carbon removals from the atmosphere (sequestration) by forest sinks represent the cumulative carbon captured (megagrams CO2/ha) by the growth of established and newly regrowing forests during the model period between 2001-2023. Removals include accumulation of carbon in both aboveground and belowground live tree biomass. Following IPCC Tier 1 assumptions for forests remaining forests, removals by dead wood, litter, and soil carbon pools are assumed to be zero. In each pixel, carbon removals are calculated following IPCC Guidelines for <a href=\"https://www.ipcc.ch/report/2019-refinement-to-the-2006-ipcc-guidelines-for-national-greenhouse-gas-inventories/\">national greenhouse gas inventories</a> where forests existed in 2000 or were established between 2000 and 2020 according to <a href=\"https://www.frontiersin.org/articles/10.3389/frsen.2022.856903/full\">Potapov et al. 2022</a>. Atmospheric carbon removed in each pixel is based on maps of forest type (e.g., mangrove, plantation), ecozone (e.g., humid Neotropics), forest age (e.g., primary, old secondary), and number of years of carbon removal. This layer reflects the cumulative removals during the model period (2001-2023) and must be divided by 23 to obtain an annual average during the model duration; removal rates cannot be assigned to individual years of the model. All input layers were resampled to a common resolution of 0.00025 x 0.00025 degrees each to match <a href=\"https://www.science.org/doi/10.1126/science.1244693\">Hansen et al. (2013)</a>.</p><p>Each year, the tree cover loss, <a href=\"https://gfw.global/39qbPdC\">drivers of tree cover loss</a>, and burned area are updated. In 2023 and 2024, a few model input data sets and constants were changed as well, as described below. Please refer to <a href=\"https://www.globalforestwatch.org/blog/data/whats-new-carbon-flux-monitoring/\">this blog post</a> for more information.  </p><br><ol><br><li>The source of the ratio between belowground biomass carbon and aboveground biomass carbon. Previously used one global constant; now uses map from <a href=\"https://essd.copernicus.org/articles/13/4263/2021/\">Huang et al. 2021</a></li><br><li>The years of tree cover gain. Previously used 2000-2012; now uses 2000-2020 from <a href=\"https://www.frontiersin.org/articles/10.3389/frsen.2022.856903/full\">Potapov et al. 2022</a>. </li><br><li>The source of fire data. Previously used MODIS burned area; now uses tree cover loss from fires from <a href=\"https://www.frontiersin.org/articles/10.3389/frsen.2022.825190/full\">Tyukavina et al. 2022</a>. </li><br><li>The source of peat maps. New tropical data sets have been included and the data set above 40 degrees north has been changed. </li><br><li>Global warming potential (GWP) constants for CH4 and N2O. Previously used GWPs from IPCC Fifth Assessment Report; now uses GWPs from IPCC <a href=\"https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_Chapter07.pdf\">Sixth Assessment Report</a>. </li><br><li>Removal factors for older (&gt;20 years) secondary temperate forests and their associated uncertainties. Previously used removal factors published in <a href=\"https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch04_Forest%20Land.pdf\">Table 4.9</a> of the 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories; now uses corrected removal factors and uncertainties from the 4th Corrigenda to the 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories. </li><br><li>Planted tree extent and removal factors. Previously used Spatial Database of Planted Trees (SDPT) <a href=\"https://www.wri.org/research/spatial-database-planted-trees-sdpt-version-10\">Version 1.0</a>; now uses <a href=\"https://www.wri.org/research/spatial-database-planted-trees-sdpt-version-2\">SDPT Version 2.0</a> and associated removal factors. </li><br></ol><br><p>Removals are available for download in two different area units over the model duration: 1) megagrams of CO2 removed/ha, and 2) megagrams of CO2 removed/pixel. The first is appropriate for visualizing (mapping) removals because it represents the density of removals per hectare. The second is appropriate for calculating the removals in an area of interest (AOI) because the values of the pixels in the AOI can be summed to obtain the total removals for that area. The values in the latter were calculated by adjusting the removals per hectare by the size of each pixel, which varies by latitude. When estimating removals occurring over a defined number of years between 2001 and 2023 to compare to emissions, divide total carbon removals by the model duration and then multiply by the number of years in the period of interest. Both datasets only include pixels within forests, as defined in the methods of Harris et al. (2021) and updated with tree cover gain through 2020.   </p>",
                    "citation": "<p>Harris et al. (2021). Global maps of 21st century forest carbon fluxes. Accessed on [date] from Global Forest Watch.</p>",
                    "cautions": "<ul><br><li>Data are the product of modeling and thus have an inherent degree of error and uncertainty. Users are strongly encouraged to read and fully comprehend the metadata and other available documentation prior to data use. </li><br><li>Values are applicable to forest areas (canopy cover &gt;30 percent and &gt;5 m height or areas with tree cover gain). See Harris et al. (2021) for further information on the forest definition used in the analysis. </li><br><li>Carbon removals reflect the total removals over the model period of 2001-2023, not an annual time series from which a trend can be derived. Thus, values must be divided by 23 to calculate average annual removals.   </li><br><li>Uncertainty is higher in gross removals than emissions, particularly driven by uncertainty in removal factors.  </li><br><li>Carbon removals reflect a gross estimate, i.e., carbon emissions from previous or subsequent loss of tree cover are not included. Instead, gross carbon emissions are accounted for in the companion forest carbon emissions layer. </li><br><li>Removals data contain temporal inconsistencies because tree cover gain represents a cumulative total from 2000-2020, rather than annual gains as estimated through 2023. </li><br><li>Forest carbon removals reflect those occurring only within forest ecosystems and do not reflect carbon stock increases in the harvested wood products (HWP) pool. </li><br><li>Large jumps in removals along some boundaries are due to the use of ecozone-specific removal factors. The changes in removals occur at ecozone boundaries, where different removal factors are applied on each side. </li><br><li>This dataset has been updated since its original publication. See Overview for more information.</li><br></ul>",
                    "date_of_content": "<p>2001-2023</p>",
                    "learn_more": "https://www.nature.com/articles/s41558-020-00976-6",
                    "source": "<p>Harris, N.L., D.A. Gibbs, A. Baccini, R.A. Birdsey, S. de Bruin, M. Farina, L. Fatoyinbo, M.C. Hansen, M. Herold, R.A. Houghton, P.V. Potapov, D. Requena Suarez, R.M. Roman-Cuesta, S.S. Saatchi, C.M. Slay, S.A. Turubanova, A. Tyukavina. 2021. Global maps of twenty-first century forest carbon fluxes. Nature Climate Change. <a href=\"https://doi.org/10.1038/s41558-020-00976-6\">https://doi.org/10.1038/s41558-020-00976-6</a></p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>30 × 30m</p>",
                    "frequency_of_updates": "<p>Annual</p>",
                    "tags": "Forest Change"
                },
                "legendConfig": {
                    "name": {
                        "en": "Forest carbon gross removals (2001-2023)",
                        "fr": "Retraits bruts de carbone en forêt",
                        "es": "Extracciones brutas de carbono en bosques",
                        "pt": "Remoções brutas de carbono florestal",
                        "id": "Penghapusan bruto karbon hutan",
                        "zh": "森林碳总去除量",
                        "ka": "Орман карбондық жалпы шығындар"
                    },
                    "type": "gradient",
                    "items": [
                        {
                            "color": "rgb(28, 68, 91)",
                            "name": {
                                "en": ">1500 tCO₂e ha⁻¹",
                                "fr": ">1500 tCO₂e ha⁻¹",
                                "es": ">1500 tCO₂e ha⁻¹",
                                "pt": ">1500 tCO₂e ha⁻¹",
                                "id": ">1500 tCO₂e ha⁻¹",
                                "zh": ">1500 tCO₂e ha⁻¹",
                                "ka": ">1500 tCO₂e ha⁻¹"
                            }
                        },
                        {
                            "color": "rgb(17, 122, 120)",
                            "name": {
                                "en": "",
                                "fr": "",
                                "es": "",
                                "pt": "",
                                "id": "",
                                "zh": "",
                                "ka": ""
                            }
                        },
                        {
                            "color": "rgb(209, 216, 197)",
                            "name": {
                                "en": "",
                                "fr": "",
                                "es": "",
                                "pt": "",
                                "id": "",
                                "zh": "",
                                "ka": ""
                            }
                        },
                        {
                            "color": "rgb(221, 224, 209)",
                            "name": {
                                "en": "",
                                "fr": "",
                                "es": "",
                                "pt": "",
                                "id": "",
                                "zh": "",
                                "ka": ""
                            }
                        },
                        {
                            "color": "rgb(255, 246, 244)",
                            "name": {
                                "en": "0",
                                "fr": "0",
                                "es": "0",
                                "pt": "0",
                                "id": "0",
                                "zh": "0",
                                "ka": "0"
                            }
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "id": "WRI_FOREST_CARBON_GROSS_REMOVALS",
            "type": "forest-carbon-gross-removals",
            "url": "https://tiles.globalforestwatch.org/gfw_forest_carbon_gross_removals/v20240308/tcd_30/{z}/{x}/{y}.png",
            "technicalName": "wri_forest_carbon_gross_removals",
            "label": {
                "en": "Forest carbon gross removals",
                "fr": "Retraits bruts de carbone en forêt",
                "es": "Extracciones brutas de carbono en bosques",
                "pt": "Remoções brutas de carbono florestal",
                "id": "Penghapusan bruto karbon hutan",
                "zh": "森林碳总去除量",
                "ka": "Орман карбондық жалпы шығындар"
            },
            "sublabel": {
                "en": "30m, global, 2001-2023, Harris et al. 2023",
                "fr": "30m, global, 2001-2023, Harris et al. 2023",
                "es": "30m, global, 2001-2023, Harris et al. 2023",
                "pt": "30m, global, 2001-2023, Harris et al. 2023",
                "id": "30m, global, 2001-2023, Harris et al. 2023",
                "zh": "30m, global, 2001-2023, Harris et al. 2023",
                "ka": "30m, global, 2001-2023, Harris et al. 2023"
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 7,
        "layerGroupId": "GROUP_CLIMATE",
        "dataLayer": {
            "id": "FOREST_CARBON_GROSS_EMISSIONS",
            "order": 7,
            "type": "remoteDataLayer",
            "uuid": "0b45cb69-6432-449f-af38-25cdcda85d55",
            "groupId": "GROUP_CLIMATE"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "function": "<p>Displays forest greenhouse gas emissions from stand-replacing disturbances</p>",
                    "geographic_coverage": "<p>Global</p>",
                    "download_data": "https://data.globalforestwatch.org/datasets/753016096c1d49f0977e7b62533375ee",
                    "map_service": "",
                    "subtitle": "(2001-2023/30m/Harris et al. 2021)",
                    "license": "<p><a href=\"https://creativecommons.org/licenses/by/4.0/\">CC BY 4.0</a></p>",
                    "title": "Forest Carbon Emissions",
                    "agol_id": "",
                    "overview": "<p>This emissions layer is part of the forest carbon flux model described in <a href=\"https://www.nature.com/articles/s41558-020-00976-6\">Harris et al. (2021)</a>. This paper introduces a geospatial monitoring framework for estimating global forest carbon fluxes which can assist a variety of actors and organizations with tracking greenhouse gas fluxes from forests and in decreasing emissions or increasing removals by forests. Forest carbon emissions represent the greenhouse gas emissions arising from stand-replacing forest disturbances that occurred in each modeled year (megagrams CO2 emissions/ha, between 2001 and 2023). Emissions include all relevant ecosystem carbon pools (aboveground biomass, belowground biomass, dead wood, litter, soil organic carbon) and greenhouse gases (CO2, CH4, N2O). Emissions estimates for each pixel are calculated following IPCC Guidelines for <a href=\"https://www.ipcc.ch/report/2019-refinement-to-the-2006-ipcc-guidelines-for-national-greenhouse-gas-inventories/\">national greenhouse gas inventories</a> where stand-replacing disturbance occurred, as mapped in the Global Forest Change annual tree cover loss data of  <a href=\"https://www.science.org/doi/10.1126/science.1244693\">Hansen et al. (2013)</a>. The carbon emitted from each pixel is based on carbon densities in 2000, with adjustment for carbon accumulated between 2000 and the year of disturbance.  </p><p>Emissions reflect a gross estimate, i.e., carbon removals from subsequent regrowth are not included. Instead, gross carbon removals resulting from subsequent regrowth after clearing are accounted for in the companion <a href=\"https://data.globalforestwatch.org/datasets/forest-carbon-removals\">forest carbon removals layer</a>. The fraction of carbon emitted from each pixel upon disturbance (emission factor) is affected by several factors, including the direct driver of disturbance, whether fire was observed in the year of or preceding the observed disturbance event, whether the disturbance occurred on peat, and more. All emissions are assumed to occur in the year of disturbance. Emissions can be assigned to a specific year using the Hansen tree cover loss data; separate rasters for emissions for each year are not available from GFW. All input layers were resampled to a common resolution of 0.00025 × 0.00025 degrees each to match Hansen et al. (2013). </p><p>Each year, the tree cover loss, <a href=\"https://gfw.global/39qbPdC\">drivers of tree cover loss</a>, and burned area are updated. In 2023 and 2024, a few model input data sets and constants were changed as well, as described below. Please refer to <a href=\"https://www.globalforestwatch.org/blog/data/whats-new-carbon-flux-monitoring/\">this blog post</a> for more information.  </p><br><ol><br><li>The source of the ratio between belowground biomass carbon and aboveground biomass carbon. Previously used one global constant; now uses map from <a href=\"https://essd.copernicus.org/articles/13/4263/2021/\">Huang et al. 2021</a></li><br><li>The years of tree cover gain. Previously used 2000-2012; now uses 2000-2020 from <a href=\"https://www.frontiersin.org/articles/10.3389/frsen.2022.856903/full\">Potapov et al. 2022</a>. </li><br><li>The source of fire data. Previously used MODIS burned area; now uses tree cover loss from fires from <a href=\"https://www.frontiersin.org/articles/10.3389/frsen.2022.825190/full\">Tyukavina et al. 2022</a>. </li><br><li>The source of peat maps. New tropical data sets have been included and the data set above 40 degrees north has been changed. </li><br><li>Global warming potential (GWP) constants for CH4 and N2O. Previously used GWPs from IPCC Fifth Assessment Report; now uses GWPs from IPCC <a href=\"https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_Chapter07.pdf\">Sixth Assessment Report</a>. </li><br><li>Removal factors for older (&gt;20 years) secondary temperate forests and their associated uncertainties. Previously used removal factors published in <a href=\"https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch04_Forest%20Land.pdf\">Table 4.9</a> of the 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories; now uses corrected removal factors and uncertainties from the 4th Corrigenda to the 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories. </li><br><li>Planted tree extent and removal factors. Previously used Spatial Database of Planted Trees (SDPT) <a href=\"https://www.wri.org/research/spatial-database-planted-trees-sdpt-version-10\">Version 1.0</a>; now uses <a href=\"https://www.wri.org/research/spatial-database-planted-trees-sdpt-version-2\">SDPT Version 2.0</a> and associated removal factors.</li><br></ol><br><p>Emissions are available for download in two different area units: 1) megagrams of CO2 emissions/ha, and 2) megagrams of CO2 emissions/pixel. The first is appropriate for visualizing (mapping) emissions because it represents the density of emissions per hectare. The second is appropriate for calculating the emissions in an area of interest (AOI) because the values of the pixels in the AOI can be summed to obtain the total emissions for that area. The values in the latter were calculated by adjusting the emissions per hectare by the size of each pixel, which varies by latitude. Both datasets only include pixels within forests, as defined in the methods of Harris et al. (2021) and updated with tree cover gain through 2020.  </p>",
                    "citation": "<p>Harris et al. (2021). Global maps of 21st century forest carbon fluxes. Accessed on [date] from Global Forest Watch.</p>",
                    "cautions": "<ul><br><li>Data are the product of modeling and thus have an inherent degree of error and uncertainty. Users are strongly encouraged to read and fully comprehend the metadata and other available documentation prior to data use.  </li><br><li>Values are applicable to forest areas only (canopy cover &gt;30 percent and &gt;5 m height or areas with tree cover gain). See <a href=\"https://www.nature.com/articles/s41558-020-00976-6\">Harris et al. (2021)</a> for further information on the forest definition used in the analysis. </li><br><li>Although emissions in each pixel are associated with a specific year of disturbance, emissions over an area of interest reflect the total over the model period of 2001-2023. Thus, values must be divided by 23 to calculate average annual removals.   </li><br><li>Emissions reflect stand-replacing disturbances as observed in Landsat satellite imagery and do not include emissions from unobserved forest degradation. </li><br><li>Emissions reflect a gross estimate, i.e., carbon removals from any regrowth that occurs after disturbance are not included. Instead, gross carbon removals are accounted for in the companion forest carbon removals layer. </li><br><li>Emissions data contain temporal inconsistencies. Improvements in the detection of tree cover loss due to the incorporation of new satellite data and methodology changes between 2011 and 2015 may result in higher estimates of emissions in recent years compared to earlier years. Refer <a href=\"https://www.globalforestwatch.org/blog/data/20-years-global-tree-cover-loss-data-trends/\">here</a> for additional information. </li><br><li>Forest carbon emissions do not reflect carbon transfers from ecosystem carbon pools to the harvested wood products (HWP) pool. </li><br><li>This dataset has been updated since its original publication. See Overview for more information.  </li><br></ul>",
                    "date_of_content": "<p>2001-2023</p>",
                    "learn_more": "",
                    "source": "<p>Harris, N.L., D.A. Gibbs, A. Baccini, R.A. Birdsey, S. de Bruin, M. Farina, L. Fatoyinbo, M.C. Hansen, M. Herold, R.A. Houghton, P.V. Potapov, D. Requena Suarez, R.M. Roman-Cuesta, S.S. Saatchi, C.M. Slay, S.A. Turubanova, A. Tyukavina. 2021. Global maps of twenty-first century forest carbon fluxes. Nature Climate Change. <a href=\"https://doi.org/10.1038/s41558-020-00976-6\">https://doi.org/10.1038/s41558-020-00976-6</a></p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>30 × 30m</p>",
                    "frequency_of_updates": "<p>Annual</p>",
                    "tags": "Forest Change"
                },
                "legendConfig": {
                    "name": {
                        "en": "Forest Greenhouse Gas Emissions (2001-2023)",
                        "fr": "Émissions de gaz à effet de serre provenant des forêts",
                        "es": "Emisiones de gases de efecto invernadero en los bosques",
                        "pt": "Emissões de Gases de Efeito Estufa Florestais",
                        "id": "Emisi Gas Rumah Kaca dari Hutan",
                        "zh": "森林温室气体排放",
                        "ka": "Орманның жауапкершілік тауып қазуылары"
                    },
                    "type": "gradient",
                    "items": [
                        {
                            "color": "rgb(123, 59, 127)",
                            "name": {
                                "en": ">1500 tCO₂e ha⁻¹",
                                "fr": ">1500 tCO₂e ha⁻¹",
                                "es": ">1500 tCO₂e ha⁻¹",
                                "pt": ">1500 tCO₂e ha⁻¹",
                                "id": ">1500 tCO₂e ha⁻¹",
                                "zh": ">1500 tCO₂e ha⁻¹",
                                "ka": ">1500 tCO₂e ha⁻¹"
                            }
                        },
                        {
                            "color": "rgb(140, 79, 160)",
                            "name": {
                                "en": "",
                                "fr": "",
                                "es": "",
                                "pt": "",
                                "id": "",
                                "zh": "",
                                "ka": ""
                            }
                        },
                        {
                            "color": "rgb(173, 145, 229)",
                            "name": {
                                "en": "",
                                "fr": "",
                                "es": "",
                                "pt": "",
                                "id": "",
                                "zh": "",
                                "ka": ""
                            }
                        },
                        {
                            "color": "rgb(209, 201, 227)",
                            "name": {
                                "en": "",
                                "fr": "",
                                "es": "",
                                "pt": "",
                                "id": "",
                                "zh": "",
                                "ka": ""
                            }
                        },
                        {
                            "color": "rgb(245, 237, 242)",
                            "name": {
                                "en": "0",
                                "fr": "0",
                                "es": "0",
                                "pt": "0",
                                "id": "0",
                                "zh": "0",
                                "ka": "0"
                            }
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "id": "WRI_FOREST_CARBON_GROSS_EMISSION",
            "type": "forest-carbon-gross-emissions",
            "url": "https://tiles.globalforestwatch.org/gfw_forest_carbon_gross_emissions/v20240308/tcd_{tcd}/{z}/{x}/{y}.png",
            "technicalName": "wri_forest_carbon_gross_emission",
            "label": {
                "en": "Forest Greenhouse Gas Emissions",
                "fr": "Émissions de gaz à effet de serre provenant des forêts",
                "es": "Emisiones de gases de efecto invernadero en los bosques",
                "pt": "Emissões de Gases de Efeito Estufa Florestais",
                "id": "Emisi Gas Rumah Kaca dari Hutan",
                "zh": "森林温室气体排放",
                "ka": "Орманның жауапкершілік тауып қазуылары"
            },
            "sublabel": {
                "en": "30m, global, 2001-2023, Harris et al. 2023",
                "fr": "30m, global, 2001-2023, Harris et al. 2023",
                "es": "30m, global, 2001-2023, Harris et al. 2023",
                "pt": "30m, global, 2001-2023, Harris et al. 2023",
                "id": "30m, global, 2001-2023, Harris et al. 2023",
                "zh": "30m, global, 2001-2023, Harris et al. 2023",
                "ka": "30m, global, 2001-2023, Harris et al. 2023"
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 8,
        "layerGroupId": "GROUP_CLIMATE",
        "dataLayer": {
            "id": "FOREST_CARBON_NET_FLUX",
            "order": 8,
            "type": "remoteDataLayer",
            "uuid": "bd768c4b-f5f8-47f9-b6a0-5bb6078f0fac",
            "groupId": "GROUP_CLIMATE"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "function": "<p>Displays the net loss of forest ecosystem carbon, calculated as the difference between forest carbon emissions from stand-replacing forest disturbances and carbon removals from forest growth </p>",
                    "geographic_coverage": "<p>Global</p>",
                    "download_data": "https://data.globalforestwatch.org/datasets/94871bf57f544ea39e594feb92b06305",
                    "map_service": "",
                    "subtitle": "(2001-2023/30m/Harris et al. 2021)",
                    "license": "<p><a href=\"https://creativecommons.org/licenses/by/4.0/\">CC BY 4.0</a></p>",
                    "title": "Net Forest Carbon Flux",
                    "agol_id": "",
                    "overview": "<p>This net flux layer is part of the forest carbon flux model described in Harris et al. (2021). This paper introduces a geospatial monitoring framework for estimating global forest carbon fluxes which can assist a variety of actors and organizations with tracking greenhouse gas fluxes from forests and in decreasing emissions or increasing removals by forests. Net forest carbon flux represents the net loss of forest ecosystem carbon, calculated as the between carbon emitted by forests and removed by (or sequestered by) forests during the model period. Net carbon flux is calculated by subtracting average gross removals from annual gross emissions in each forested pixel; negative values are where forests were net sinks of carbon and positive values are where forests were net sources of carbon between 2001 and 2023. Net fluxes are calculated following IPCC Guidelines for national greenhouse gas inventories in each pixel where forests existed in 2000 or were established between 2000 and 2020 according to <a href=\"https://www.frontiersin.org/articles/10.3389/frsen.2022.856903/full\">Potapov et al. 2022</a>. This layer reflects the cumulative net flux during the model period (2001-2023) and must be divided by 23 to obtain average annual net flux; net flux values cannot be assigned to individual years of the model. All input layers were resampled to a common resolution of 0.00025 x 0.00025 degrees each to match Hansen et al. (2013).  </p><p>Each year, the tree cover loss, <a href=\"https://gfw.global/39qbPdC\">drivers of tree cover loss</a>, and burned area are updated. In 2023 and 2024, a few model input data sets and constants were changed as well, as described below. Please refer to <a href=\"https://www.globalforestwatch.org/blog/data/whats-new-carbon-flux-monitoring/\">this blog post</a> for more information.  </p><br><ol><br><li>The source of the ratio between belowground carbon and aboveground carbon. Previously used one global constant; now uses map from <a href=\"https://essd.copernicus.org/articles/13/4263/2021/\">Huang et al. 2021</a></li><br><li>The years of tree cover gain. Previously used 2000-2012; now uses 2000-2020 from <a href=\"https://www.frontiersin.org/articles/10.3389/frsen.2022.856903/full\">Potapov et al. 2022</a>. </li><br><li>The source of fire data. Previously used MODIS burned area; now uses tree cover loss from fires from <a href=\"https://www.frontiersin.org/articles/10.3389/frsen.2022.825190/full\">Tyukavina et al. 2022</a>. </li><br><li>The source of peat maps. New tropical data sets have been included and the data set above 40 degrees north has been changed. </li><br><li>Global warming potential (GWP) constants for CH4 and N2O. Previously used GWPs from IPCC Fifth Assessment Report; now uses GWPs from IPCC <a href=\"https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_Chapter07.pdf\">Sixth Assessment Report</a>. </li><br><li>Removal factors for older (&gt;20 years) secondary temperate forests and their associated uncertainties. Previously used removal factors published in <a href=\"https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch04_Forest%20Land.pdf\">Table 4.9</a> of the 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories; now uses corrected removal factors and uncertainties from the 4th Corrigenda to the 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories. </li><br><li>Planted tree extent and removal factors. Previously used Spatial Database of Planted Trees (SDPT) <a href=\"https://www.wri.org/research/spatial-database-planted-trees-sdpt-version-10\">Version 1.0</a>; now uses <a href=\"https://www.wri.org/research/spatial-database-planted-trees-sdpt-version-2\">SDPT Version 2.0</a> and associated removal factors.</li><br></ol><br><p>Net flux is available for download in two different area units over the model duration: 1) megagrams of CO2 emissions/ha, and 2) megagrams of CO2 emissions/pixel. The first is appropriate for visualizing (mapping) net flux because it represent the density of carbon fluxes per hectare. The second is appropriate for calculating the net flux in an area of interest (AOI) because the values of the pixels in the AOI can be summed to obtain the total carbon flux for that area. The values in the latter were calculated by adjusting the net flux per hectare by the size of each pixel, which varies by latitude. When estimating net flux occurring over a defined number of years between 2001 and 2023, divide the values by the model duration and then multiply by the number of years in the period of interest. Both datasets only include pixels within forests, as defined in the methods of Harris et al. (2021) and updated with tree cover gain through 2020. </p>",
                    "citation": "<p>Harris et al. (2021). Global maps of 21st century forest carbon fluxes. Accessed on [date] from Global Forest Watch.</p>",
                    "cautions": "<ul><br><li>Data are the product of modeling and thus have an inherent degree of error and uncertainty. Users are strongly encouraged to read and fully comprehend the metadata and other available documentation prior to data use.  </li><br><li>Net flux reflects the total over the model period of 2001-2023, not an annual time series from which a trend can be derived. Thus, values must be divided by 23 to calculate average annual net flux. </li><br><li>Uncertainty is higher in gross removals than emissions, particularly driven by uncertainty in removal factors. These uncertainties are propagated to the uncertainty in net flux.  </li><br><li>Values are applicable to forest areas (canopy cover &gt;30 percent and &gt;5 m height). See Harris et al. (2021) for further information on the forest definition used in the analysis. </li><br><li>Emissions reflect stand-replacing disturbances as observed in Landsat satellite imagery and do not include emissions from unobserved forest degradation. </li><br><li>Activity data used as the basis of the estimates contain temporal inconsistencies: </li><br><li>Removals data contain temporal inconsistencies because tree cover gain represents a cumulative total from 2000-2020, rather than annual gains as estimated through 2023. </li><br><li>Improvements in the detection of tree cover loss due to the incorporation of new satellite data and methodology changes between 2011 and 2015 may result in higher estimates of emissions in recent years compared to earlier years. Refer <a href=\"https://www.globalforestwatch.org/blog/data/20-years-global-tree-cover-loss-data-trends/\">here</a> for additional information. </li><br><li>Large jumps in net flux along some boundary are due to the use of ecozone-specific removal factors. The changes in net flux occur at ecozone boundaries, where different removal factors are applied on each side. </li><br><li>This dataset has been updated since its original publication. See Overview for more information.</li><br></ul>",
                    "date_of_content": "<p>2001-2023</p>",
                    "learn_more": "",
                    "source": "<p>Harris, N.L., D.A. Gibbs, A. Baccini, R.A. Birdsey, S. de Bruin, M. Farina, L. Fatoyinbo, M.C. Hansen, M. Herold, R.A. Houghton, P.V. Potapov, D. Requena Suarez, R.M. Roman-Cuesta, S.S. Saatchi, C.M. Slay, S.A. Turubanova, A. Tyukavina. 2021. Global maps of twenty-first century forest carbon fluxes. Nature Climate Change. https://doi.org/10.1038/s41558-020-00976-6</p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>30 × 30m</p>",
                    "frequency_of_updates": "<p>Annual</p>",
                    "tags": "Forest Change"
                },
                "legendConfig": {
                    "name": {
                        "en": "Forest Greenhouse Net Flux (2001-2023)",
                        "fr": "Flux net des serres forestières",
                        "es": "Flujo neto de invernaderos forestales",
                        "pt": "fluxo líquido de estufa florestal",
                        "id": "arus bersih rumah kaca hutan",
                        "zh": "森林温室净通量",
                        "ka": "орман климат павландыру желдерінің жалпы айналымы"
                    },
                    "type": "gradient",
                    "items": [
                        {
                            "color": "rgb(99, 39, 90)",
                            "name": {
                                "en": ">1500 tCO₂e ha⁻¹ (source)",
                                "fr": ">1500 tCO₂e ha⁻¹ (source)",
                                "es": ">1500 tCO₂e ha⁻¹ (Fuentes)",
                                "pt": ">1500 tCO₂e ha⁻¹ (Fontes)",
                                "id": ">1500 tCO₂e ha⁻¹ (Sumber)",
                                "zh": ">1500 tCO₂e ha⁻¹ (来源)",
                                "ka": ">1500 tCO₂e ha⁻¹ (წყაროები)",
                                "az": ">1500 tCO₂e ha⁻¹ (Qaynaq)",
                                "nl": ">1500 tCO₂e ha⁻¹ (Bronnen)",
                                "hy": ">1500 tCO₂e ha⁻¹ (աղբյուրները)"
                            }
                        },
                        {
                            "color": "rgb(190, 178, 230)",
                            "name": {
                                "en": "",
                                "fr": "",
                                "es": "",
                                "pt": "",
                                "id": "",
                                "zh": "",
                                "ka": "",
                                "az": "",
                                "nl": "",
                                "hy": ""
                            }
                        },
                        {
                            "color": "rgb(221, 224, 209)",
                            "name": {
                                "en": "",
                                "fr": "",
                                "es": "",
                                "pt": "",
                                "id": "",
                                "zh": "",
                                "ka": "",
                                "az": "",
                                "nl": "",
                                "hy": ""
                            }
                        },
                        {
                            "color": "rgb(111, 173, 139)",
                            "name": {
                                "en": "",
                                "fr": "",
                                "es": "",
                                "pt": "",
                                "id": "",
                                "zh": "",
                                "ka": "",
                                "az": "",
                                "nl": "",
                                "hy": ""
                            }
                        },
                        {
                            "color": "rgb(23, 136, 125)",
                            "name": {
                                "en": "<-1500 (Sink)",
                                "fr": "<-1500 (Puits)",
                                "es": "<-1500 (Sumideros)",
                                "pt": "<-1500 (Sumidouros)",
                                "id": "<-1500 (Sumur)",
                                "zh": "<-1500 (水槽)",
                                "ka": "<-1500 (ნიჟარები)",
                                "az": "<-1500 (çöküntü)",
                                "nl": "<-1500 (Putten)",
                                "hy": "<-1500 (լվացարաններ)"
                            }
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "id": "WRI_FOREST_CARBON_NET_FLUX",
            "type": "forest-carbon-net-flux",
            "url": "https://tiles.globalforestwatch.org/gfw_forest_carbon_net_flux/v20240308/tcd_{tcd}/{z}/{x}/{y}.png",
            "technicalName": "wri_forest_carbon_net_flux",
            "label": {
                "en": "Forest Greenhouse Net Flux",
                "fr": "Flux net des serres forestières",
                "es": "Flujo neto de invernaderos forestales",
                "pt": "fluxo líquido de estufa florestal",
                "id": "arus bersih rumah kaca hutan",
                "zh": "森林温室净通量",
                "ka": "орман климат павландыру желдерінің жалпы айналымы"
            },
            "sublabel": {
                "en": "30m, global, 2001-2023, Harris et al. 2023",
                "fr": "30m, global, 2001-2023, Harris et al. 2023",
                "es": "30m, global, 2001-2023, Harris et al. 2023",
                "pt": "30m, global, 2001-2023, Harris et al. 2023",
                "id": "30m, global, 2001-2023, Harris et al. 2023",
                "zh": "30m, global, 2001-2023, Harris et al. 2023",
                "ka": "30m, global, 2001-2023, Harris et al. 2023"
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 1,
        "layerGroupId": "GROUP_LCD",
        "dataLayer": {
            "id": "TREE_COVER_LOSS",
            "order": 1,
            "type": "remoteDataLayer",
            "uuid": "2aed67b3-3643-40d3-9c1e-8af9afb5d9e2",
            "groupId": "GROUP_LCD"
        },
        "layer": {
            "sublabel": {
                "ka": "(წლიური, 30მ, გლობალური, Hansen/UMD/Google/USGS/NASA)",
                "zh": "(每年更新, 30米, 全球覆盖, 汉森/马里兰大学/谷歌/美国地质测量局(USGS)/美国宇航局(NASA))",
                "id": "(annual, 30m, global, Hansen/UMD/Google/USGS/NASA)",
                "pt": "(anual, 30m, global, Hansen/UMD/Google/USGS/NASA)",
                "es": "(anual, 30m, global, Hansen/UMD/Google/USGS/NASA)",
                "fr": "(annuel, 30m, global, Hansen/UMD/Google/USGS/NASA)",
                "en": "(annual, 30m, global, Hansen/UMD/Google/USGS/NASA)"
            },
            "label": {
                "ka": "ხის ვარჯის კარგვა",
                "zh": "森林覆盖损失",
                "id": "Tree cover loss",
                "pt": "Perda de cobertura arbórea",
                "es": "Pérdida de la cobertura arbórea",
                "fr": "Perte en couvert arboré",
                "en": "Tree cover loss"
            },
            "technicalName": "tree_cover_loss",
            "maxYear": 17,
            "minYear": 1,
            "url": "https://tiles.globalforestwatch.org/umd_tree_cover_loss/v1.11/tcd_30/{z}/{x}/{y}.png",
            "type": "loss",
            "id": "TREE_COVER_LOSS",
            "metadata": {
                "metadata": {
                    "function": "<p>Identifies areas of gross tree cover loss</p>",
                    "geographic_coverage": "<p>Global land area (excluding Antarctica and other Arctic islands).</p>",
                    "download_data": "https://storage.googleapis.com/earthenginepartners-hansen/GFC-2023-v1.11/download.html",
                    "map_service": "",
                    "subtitle": "(annual, 30m, global, Hansen/UMD/Google/USGS/NASA)",
                    "license": "<p><a href=\"http://creativecommons.org/licenses/by/4.0/\">CC BY 4.0</a></p>",
                    "title": "Tree cover loss",
                    "agol_id": "",
                    "overview": "<p>In this data set, “tree cover” is defined as all vegetation greater than 5 meters in height, and may take the form of natural forests or plantations across a range of canopy densities. “Loss” indicates the removal or mortality of tree cover and can be due to a variety of factors, including mechanical harvesting, fire, disease, or storm damage. As such, “loss” does not equate to deforestation.</p><p>Due to variation in research methodology and date of content, tree cover, loss, and gain data sets cannot be compared accurately against each other. Accordingly, “net” loss cannot be calculated by subtracting figures for tree cover gain from tree cover loss, and current (post-2000) tree cover cannot be determined by subtracting figures for annual tree cover loss from year 2000 tree cover.</p><p>The 2011-2023 data was produced using an <a href=\"https://storage.googleapis.com/earthenginepartners-hansen/GFC-2022-v1.10/download.html\">updated methodology</a>. Comparisons between the original 2001-2010 data and the 2011-2023 update should be performed with caution.</p><p>In the original publication, the authors evaluated the overall prevalence of false positives (commission errors) in this data at 13%, and the prevalence of false negatives (omission errors) at 12%, though the accuracy varies by biome and thus may be higher or lower in any particular location. The model often misses disturbances in smallholder landscapes, resulting in lower accuracy of the data in sub-Saharan Africa, where this type of disturbance is more common. The authors are 75 percent confident that the loss occurred within the stated year, and 97 percent confident that it occurred within a year before or after. Users of the data can smooth out such uncertainty by examining the average over multiple years. Read our <a href=\"https://www.globalforestwatch.org/blog/data/how-accurate-is-accurate-enough-examining-the-glad-global-tree-cover-change-data-part-1.html\">blog series</a> on the accuracy of this data for more information.</p>",
                    "citation": "<p>\"Use the following credit when these data are displayed:<br>Source: Hansen/UMD/Google/USGS/NASA, accessed through Global Forest Watch</p><p>Use the following credit when these data are cited:<br>Hansen, M. C., P. V. Potapov, R. Moore, M. Hancher, S. A. Turubanova, A. Tyukavina, D. Thau, S. V. Stehman, S. J. Goetz, T. R. Loveland, A. Kommareddy, A. Egorov, L. Chini, C. O. Justice, and J. R. G. Townshend. 2013. “High-Resolution Global Maps of 21st-Century Forest Cover Change.” <em>Science</em> 342 (15 November): 850–53. Data available on-line from:http://earthenginepartners.appspot.com/science-2013-global-forest. Accessed through Global Forest Watch on [date]. www.globalforestwatch.org <br>\"</p>",
                    "cautions": "<p>\"In this data set, “tree cover” is defined as all vegetation greater than 5 meters in height, and may take the form of natural forests or plantations across a range of canopy densities. “Loss” indicates the removal or mortality of tree cover and can be due to a variety of factors, including mechanical harvesting, fire, disease, or storm damage. As such, “loss” does not equate to deforestation. </p><p>Due to variation in research methodology and date of content, tree cover, loss, and gain data sets cannot be compared accurately against each other. Accordingly, “net” loss cannot be calculated by subtracting figures for tree cover gain from tree cover loss, and current (post-2000) tree cover cannot be determined by subtracting figures for annual tree cover loss from year 2000 tree cover. </p><p>The 2011-2022 data was produced using <a href=\"https://storage.googleapis.com/earthenginepartners-hansen/GFC-2022-v1.10/download.html\">updated methodology</a>. Comparisons between the original 2001-2010 data and the 2011-2022 update should be performed with caution.</p><p>The authors evaluated the overall prevalence of false positives (commission errors) in this data at 13%, and the prevalence of false negatives (omission errors) at 12%, though the accuracy varies by biome and thus may be higher or lower in any particular location. The model often misses disturbances in smallholder landscapes, resulting in lower accuracy of the data in sub-Saharan Africa, where this type of disturbance is more common. The authors are 75 percent confident that the loss occurred within the stated year, and 97 percent confident that it occurred within a year before or after. Users of the data can smooth out such uncertainty by examining the average over multiple years. Read our <a href=\"http://blog.globalforestwatch.org/data/how-accurate-is-accurate-enough-examining-the-glad-global-tree-cover-change-data-part-1.html\">blog series</a> on the accuracy of this data for more information.\"</p>",
                    "date_of_content": "<p>2001-2023</p>",
                    "learn_more": "http://science.sciencemag.org/content/342/6160/850",
                    "source": "<p>Hansen, M. C., P. V. Potapov, R. Moore, M. Hancher, S. A. Turubanova, A. Tyukavina, D. Thau, S. V. Stehman, S. J. Goetz, T. R. Loveland, A. Kommareddy, A. Egorov, L. Chini, C. O. Justice, and J. R. G. Townshend. 2013. “High-Resolution Global Maps of 21st-Century Forest Cover Change.” <em>Science</em> 342 (15 November): 850–53. Data available from: <a href=\"http://earthenginepartners.appspot.com/science-2013-global-forest\">earthenginepartners.appspot.com/science-2013-global-forest</a>.</p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>30 × 30 meters</p>",
                    "frequency_of_updates": "<p>Annual</p>",
                    "tags": "Forest Change"
                },
                "legendConfig": {
                    "notes": [
                        "Displaying loss with {thresh} canopy density.",
                        "Tree cover loss is not always deforestation."
                    ],
                    "source": "(annual, 30m, global, Hansen/UMD/Google/USGS/NASA)",
                    "threshold": 30,
                    "dataMaxZoom": 12,
                    "items": [
                        {
                            "name": {
                                "en": "Total loss",
                                "fr": "Total loss",
                                "es": "Total loss",
                                "pt": "Total loss",
                                "id": "Total loss",
                                "zh": "Total loss",
                                "ka": "Total loss"
                            },
                            "color": "#DC6499",
                            "outlineColor": "#555555"
                        }
                    ],
                    "type": "basic",
                    "name": {
                        "ka": "ხის ვარჯის კარგვა",
                        "zh": "森林覆盖损失",
                        "id": "Tree cover loss",
                        "pt": "Perda de cobertura arbórea",
                        "es": "Pérdida de la cobertura arbórea",
                        "fr": "Perte en couvert arboré",
                        "en": "Tree cover loss"
                    }
                },
                "interactionConfig": {}
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 2,
        "layerGroupId": "GROUP_LCD",
        "dataLayer": {
            "id": "TREE_COVER_GAIN",
            "order": 2,
            "type": "remoteDataLayer",
            "uuid": "cb016f17-f12d-463a-9dc2-aabcf5db566c",
            "groupId": "GROUP_LCD"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "function": "<p>Identifies areas of tree cover gain</p>",
                    "geographic_coverage": "<p>Global</p>",
                    "download_data": "",
                    "map_service": "",
                    "subtitle": "(20 years, 30 m, global, UMD/NASA GEDI)",
                    "license": "<p><a href=\"https://creativecommons.org/licenses/by/4.0/\">CC by 4.0</a></p>",
                    "title": "Tree Cover Gain",
                    "agol_id": "",
                    "overview": "<p>This data set from the <a href=\"https://glad.umd.edu/\">GLAD</a> (Global Land Analysis &amp; Discovery) lab at the University of Maryland measures areas of tree cover gain from the year 2000 to 2020 across the globe at 30 × 30 meter resolution, displayed as a 20-year cumulative layer. Tree cover gain was determined using tree height information from the years 2000 and 2020. Tree height was modeled by the integration of the Global Ecosystem Dynamics Investigation (GEDI) lidar forest structure measurements and Landsat analysis-ready data time-series. The NASA GEDI is a spaceborne lidar instrument operating onboard the International Space Station since April 2019. It provides point-based measurements of vegetation structure, including forest canopy height at latitudes between 52°N and 52°S globally. Gain was identified where pixels had tree height ≥5 m in 2020 and tree height &lt;5 m in 2000. </p><p>Tree cover gain may indicate a number of potential activities, including natural forest growth, the tree crop rotation cycle, or tree plantation management. </p><p>When zoomed out (&lt; zoom level 12), pixels of gain are shaded according to the density of gain at the 30 x 30 meter scale. Pixels with darker shading represent areas with a higher concentration of tree cover gain, whereas pixels with lighter shading indicate a lower concentration of tree cover gain. There is no variation in pixel shading when the data is at full resolution (≥ zoom level 12). </p>",
                    "citation": "<p>Use the following credit when this data is displayed:<br>Accessed through Global Forest Watch on [date]. www.globalforestwatch.org. </p><p>Use the following credit when this data is cited:<br>Potapov, P., Hansen, M.C., Pickens, A., Hernandez-Serna, A., Tyukavina, A., Turubanova, S., Zalles, V., Li, X., Khan, A., Stolle, F., Harris, N., Song, X-P., Baggett, A., Kommareddy, I., and Kommareddy, A. 2022. The Global 2000-2020 Land Cover and Land Use Change Dataset Derived From the Landsat Archive: First Results. Frontiers in Remote Sensing, 13, April 2022. <a href=\"https://doi.org/10.3389/frsen.2022.856903\">https://doi.org/10.3389/frsen.2022.856903</a></p>",
                    "cautions": "<p>In this data set, “tree cover” is defined as woody vegetation with the height of 5 m and taller, and may take the form of natural woodlands, forests, or tree plantations across a range of canopy densities. Tree cover gain does not equate directly to restoration, afforestation or reforestation. </p><p>Due to variation in research methodology and date of content, tree cover, gain, and annual loss data sets cannot be compared accurately against each other. Accordingly, “net” cannot be calculated by subtracting figures for tree cover gain from the annual tree cover loss data set. Instead, the net tree cover change layer should be used, which was calculated exclusively from tree height data.  </p><p>Integrated use of other products such as canopy cover density data also available on GFW should be performed with caution. </p><p>The authors evaluated the accuracy of the product, and the overall accuracy was found to be 99.3%, commission error (false positives) of 28.6%, and omission error (false negatives) of 42.2%. The accuracy does vary by biome and thus may be higher or lower in any particular location. As the omission error is higher than the commission error, this indicates that the product provides conservative estimates of forest dynamics.  </p><p>There was confusion between forest enhancement (existing forest height increase) and forest gain (establishment of forests within the year 2000 non-forest land), and this was more prominent in boreal forest areas where forest height in the year 2000 was difficult to determine. </p>",
                    "date_of_content": "<p>2000-2020</p>",
                    "learn_more": "",
                    "source": "<p>Potapov, P., Hansen, M.C., Pickens, A., Hernandez-Serna, A., Tyukavina, A., Turubanova, S., Zalles, V., Li, X., Khan, A., Stolle, F., Harris, N., Song, X-P., Baggett, A., Kommareddy, I., and Kommareddy, A. 2022. The Global 2000-2020 Land Cover and Land Use Change Dataset Derived From the Landsat Archive: First Results. Frontiers in Remote Sensing, 13, April 2022. https://doi.org/10.3389/frsen.2022.856903 </p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>30 × 30 meters</p>",
                    "frequency_of_updates": "",
                    "tags": "Land Cover"
                },
                "legendConfig": {
                    "type": "basic",
                    "name": {
                        "en": "Tree cover gain (2000 - 2020)",
                        "fr": "Gain en couvert arboré (2000 - 2020)",
                        "es": "Ganancia de cobertura arbórea (2000 - 2020)",
                        "pt": "Ganho de cobertura arbórea (2000 - 2020)",
                        "id": "Perolehan tutupan pohon (2000 - 2020)",
                        "zh": "森林覆盖增加 (2000 - 2020)",
                        "ka": "ხის ვარჯის ნამატი (2000 - 2020)"
                    },
                    "source": "(12 years, 30m, global, Hansen/UMD/Google/USGS/NASA)",
                    "items": [
                        {
                            "name": {
                                "en": "Tree cover gain",
                                "fr": "Gain de la couverture arborée",
                                "es": "Ganancia de cobertura arbórea",
                                "pt": "Ganho de cobertura arbórea",
                                "id": "Perolehan tutupan pohon",
                                "zh": "森林覆盖增加",
                                "ka": "ხის ვარჯის ნამატი"
                            },
                            "color": "#4600ff",
                            "outlineColor": "#555555"
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "id": "TREE_COVER_GAIN",
            "type": "gain",
            "url": "https://tiles.globalforestwatch.org/umd_tree_cover_gain_from_height/v202206/mode/{z}/{x}/{y}.png",
            "technicalName": "tree_cover_gain",
            "label": {
                "en": "Tree cover gain",
                "fr": "Gain de la couverture arborée",
                "es": "Ganancia de cobertura arbórea",
                "pt": "Ganho de cobertura arbórea",
                "id": "Perolehan tutupan pohon",
                "zh": "森林覆盖增加",
                "ka": "ხის ვარჯის ნამატი"
            },
            "sublabel": {
                "en": "(2000 – 2020, 30m, global, Hansen/UMD/Google/USGS/NASA)",
                "fr": "(2000 – 2020, 30 m, mondiale, Hansen/UMD/Google/USGS/NASA)",
                "es": "(2000 a 2020, 30 m, global, Hansen/UMD/Google/USGS/NASA)",
                "pt": "(2000 – 2020, 30 m, global, Hansen/UMD/Google/USGS/NASA)",
                "id": "(2000 – 2020, 30m, global, Hansen/UMD/Google/USGS/NASA)",
                "zh": "(2000 – 2020 年，30m，全球，Hansen/UMD/Google/USGS/NASA）",
                "ka": "(2000 – 2020, 30 მ, გლობალური, Hansen/UMD/Google/USGS/NASA)"
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 5,
        "layerGroupId": "GROUP_LCD",
        "dataLayer": {
            "id": "GLAD_ALERTS",
            "order": 5,
            "type": "remoteDataLayer",
            "uuid": "356f862b-3e70-493a-997b-dc2a193410e9",
            "groupId": "GROUP_LCD"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "function": "<p>Identifies areas of likely tree cover loss in near-real time</p>",
                    "geographic_coverage": "<p>30 degrees north to 30 degrees south</p>",
                    "download_data": "http://glad-forest-alert.appspot.com/",
                    "map_service": "",
                    "subtitle": "(weekly, 30m, tropics, UMD/GLAD)",
                    "license": "<p><a href=\"https://creativecommons.org/licenses/by/4.0/\">CC BY 4.0</a></p>",
                    "title": "GLAD-Landsat Deforestation alerts (GLAD-L)",
                    "agol_id": "",
                    "overview": "<p>This data set, created by the <a href=\"http://glad.geog.umd.edu/\">GLAD</a> (Global Land Analysis &amp; Discovery) lab at the University of Maryland and supported by Global Forest Watch, is the first Landsat-based alert system for tree cover loss. While most existing loss alert products use 250-meter resolution MODIS imagery, these alerts have a 30-meter resolution and thus can detect loss at a much finer spatial scale. These alerts have a 30-meter resolution and are operational for land areas between 30 degrees north and south.</p><p>New Landsat 8 and 9 images are downloaded as they are posted online, assessed for cloud cover or poor data quality, and compared to the three previous years of Landsat-derived metrics (including ranks, means, and regressions of red, infrared and shortwave bands, and ranks of NDVI, NBR, and NDWI). The metrics and the latest Landsat image are run through seven decision trees to calculate a median probability of forest disturbance. Pixels with probability &gt;50% are reported as tree cover loss alerts. The entire process is run in <a href=\"https://earthengine.google.com/\">Google Earth Engine</a> to ensure reliable updates and scalability. For more information on methodology, see the <a href=\"http://iopscience.iop.org/article/10.1088/1748-9326/11/3/034008\">paper in Environmental Research Letters</a>.</p><p>Alerts are not classified as high confidence until two or more out of four consecutive observations are labelled as tree cover loss. Alerts are removed from the dataset after four consecutive observations or more than 180 days if they are not classified as high confidence. You can choose to view only high confidence alerts in the menu, though keep in mind that using only high confidence alerts misses the newest detections of tree cover loss. </p>",
                    "citation": "<p>Use the following credit when these data are displayed:</p><p>Source: GLAD/UMD, accessed through Global Forest Watch</p><p>Use the following credit when these data are cited:</p><p>Hansen, M.C., A. Krylov, A. Tyukavina, P.V. Potapov, S. Turubanova, B. Zutta, S. Ifo, B. Margono, F. Stolle, and R. Moore. 2016. Humid tropical forest disturbance alerts using Landsat data. <em>Environmental Research Letters</em>, 11 (3). Accessed through Global Forest Watch on [date]. www.globalforestwatch.org </p>",
                    "cautions": "<ul><br><li>Although called ‘deforestation alerts’ these alerts detect forest or tree cover disturbances. This product does not distinguish between human-caused and other disturbance types. Where alerts are detected within plantation forests (more likely to happen in the GLAD-L system), alerts may indicate timber harvesting operations, without a conversion to a non-forest land use. </li><br><li>The term deforestation is used because these are potential deforestation events, and alerts could be further investigated to determine this. </li><br><li>We do not recommend using deforestation alerts for global or regional trend assessment, nor for area estimates. We recommend using the annual tree cover loss data for a more accurate comparison of the trends in forest change over time, and for area estimates. Recent alerts will include false positives that have yet to raise their confidence level and may eventually be removed. Past alerts may have been removed in error from the database if rapid canopy closure precedes the additional unobscured satellite observations within 6 months. Additionally, updates to the methodologies, differing number of systems (in the case of the integrated alerts), and variation in cloud cover between months and years pose additional risks to using deforestation alerts for inter/intra-annual comparison. </li><br><li>The alerts can be ‘curated’ to identify those alerts of interest to a user, such as those alerts which are likely to be deforestation and might be prioritized for action. A user can do this by overlaying other contextual datasets, such as protected areas, or planted trees. The non-curated data are provided here in order that users can define their own prioritization approaches. Curated alert locations are provided in the Places to Watch data layer. <br><ul><br><li>While Landsat 8 and 9 satellites (formerly Landsat 7 and 8) together have a revisit period of 8 days, cloud cover can limit the availability of imagery, particularly in the wet season. Alert dates represent the instance of detection, though tree cover loss could have taken place earlier, possibly weeks earlier, due to persistent cloud cover. Note that the GLAD-L alerts were formerly sourced from Landsat 7 imagery which had a known scan line issue that sometimes resulted in false positive alerts, until April 2023 when the input was switched to Landsat 9 instead. </li><br></ul></li><br><li>In this data set, “tree cover” is defined as all vegetation greater than 5 meters in height with greater than 60% canopy cover, and may take the form of natural forests or plantations. “Tree cover loss” indicates the canopy removal of at least half a pixel and can be due to a variety of factors, including mechanical harvesting, fire, disease, or storm damage. As such, “loss” does not equate to deforestation.</li><br><li>In Peru, where the alert system was first developed, the authors evaluated the data to have 13.5% false positives (loss detected where none occurred), though the majority of those false positives (9.5%) occur on the edges of clearings. On edges, the 30 m Landsat pixels show a mix of forest and other land cover, which makes them prone to error in the system. The rate of false positives drops to 1% when only considering high confidence alerts. The data has 33% false negatives (undetected loss where it has occurred), though most of these occur in secondary forests—likely because the algorithm was created to capture primary forest loss. The higher rate of false negatives compared to false positives also indicates that the alerts are a conservative estimate of the tree cover loss that is actually occurring. </li><br><li>The confidence level may change retroactively as source data is updated; alerts that have not become high confidence within 180 days, or after 4 observations are removed from the dataset</li><br><li>Once an alert pixel reaches high confidence, forest loss will not be detected at that location again.</li><br><li>When zoomed out, this data layer displays some degree of inaccuracy because the data points must be collapsed to be visible on a larger scale. Zoom in for greater detail.</li><br></ul>",
                    "date_of_content": "<p>January 1, 2021 (GLAD-L alerts have been operating since 2015 for select countries in the Amazon and Congo Basins and insular Southeast Asia, but historical data are not available on GFW) </p>",
                    "learn_more": "http://iopscience.iop.org/article/10.1088/1748-9326/11/3/034008",
                    "source": "<p>Hansen, M.C., A. Krylov, A. Tyukavina, P.V. Potapov, S. Turubanova, B. Zutta, S. Ifo, B. Margono, F. Stolle, and R. Moore. 2016. Humid tropical forest disturbance alerts using Landsat data. <em>Environmental Research Letters</em>, 11 (3). </p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>30 × 30 meters</p>",
                    "frequency_of_updates": "<p>Updated weekly</p>",
                    "tags": "Forest Change"
                },
                "legendConfig": {
                    "name": {
                        "ka": "GLAD შეტყობინებები",
                        "zh": "GLAD 预警",
                        "id": "Peringatan GLAD",
                        "pt": "Alertas GLAD",
                        "es": "Alertas GLAD",
                        "fr": "Alertes GLAD",
                        "en": "GLAD Alerts"
                    },
                    "type": "basic",
                    "items": [
                        {
                            "outlineColor": "#555555",
                            "color": "#DC6699",
                            "name": {
                                "ka": "GLAD შეტყობინებები",
                                "zh": "GLAD 预警",
                                "id": "Peringatan GLAD",
                                "pt": "Alertas GLAD",
                                "es": "Alertas GLAD",
                                "fr": "Alertes GLAD",
                                "en": "GLAD Alerts"
                            }
                        },
                        {
                            "outlineColor": "#555555",
                            "color": "#e4c600",
                            "name": {
                                "ka": "ბოლო შეტყობინებები",
                                "zh": "最近的提醒",
                                "id": "Lansiran Terbaru",
                                "pt": "Alertas Recentes",
                                "es": "Alertas recientes",
                                "fr": "Alertes récentes",
                                "en": "Recent Alerts"
                            }
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "sublabel": {
                "ka": "(ყოველკვირეული, 30მ, აარჩიეთ ქვეყნები, UMD/ GLAD)",
                "zh": "（每周，30m，热带地区，UMD/ GLAD）",
                "id": "(mingguan, 30m, tropis. UMD/GLAD)",
                "pt": "(semanal, 30m, trópicos, UMD/ GLAD)",
                "es": "(semanal, 30m, trópicos, UMD/ GLAD)",
                "fr": "(hebdomadaire, 30m, tropiques, UMD/ GLAD)",
                "en": "(weekly, 30m, tropics, UMD/ GLAD)"
            },
            "label": {
                "ka": "GLAD შეტყობინებები",
                "zh": "GLAD 预警",
                "id": "Peringatan GLAD",
                "pt": "Alertas GLAD",
                "es": "Alertas GLAD",
                "fr": "Alertes GLAD",
                "en": "GLAD Alerts"
            },
            "confidence": [
                0,
                1
            ],
            "maxDateValue": 999999,
            "minDateValue": 15000,
            "technicalName": "umd_landsat_alerts",
            "url": "https://tiles.globalforestwatch.org/umd_glad_landsat_alerts/latest/default/{z}/{x}/{y}.png",
            "type": "glad",
            "id": "GLAD_ALERTS"
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 7,
        "layerGroupId": "GROUP_LCD",
        "dataLayer": {
            "id": "VIIRS_ACTIVE_FIRES",
            "order": 7,
            "type": "remoteDataLayer",
            "uuid": "6d316908-92c8-4f95-8598-f2a0c72786af",
            "groupId": "GROUP_LCD"
        },
        "layer": {
            "popup": {
                "content": {
                    "id": [
                        {
                            "fieldExpression": "BRIGHTNESS",
                            "label": "Brightness"
                        },
                        {
                            "fieldExpression": "CONFIDENCE",
                            "label": "Confidence"
                        },
                        {
                            "fieldExpression": "LATITUDE",
                            "label": "Latitude"
                        },
                        {
                            "fieldExpression": "LONGITUDE",
                            "label": "Longitude"
                        },
                        {
                            "fieldExpression": "ACQ_DATE:DateString(hideTime:true)",
                            "label": "Acquisition Date"
                        },
                        {
                            "fieldExpression": "ACQ_TIME",
                            "label": "Acquisition Time"
                        }
                    ],
                    "zh": [
                        {
                            "fieldExpression": "BRIGHTNESS",
                            "label": "Brightness"
                        },
                        {
                            "fieldExpression": "CONFIDENCE",
                            "label": "Confidence"
                        },
                        {
                            "fieldExpression": "LATITUDE",
                            "label": "Latitude"
                        },
                        {
                            "fieldExpression": "LONGITUDE",
                            "label": "Longitude"
                        },
                        {
                            "fieldExpression": "ACQ_DATE:DateString(hideTime:true)",
                            "label": "Acquisition Date"
                        },
                        {
                            "fieldExpression": "ACQ_TIME",
                            "label": "Acquisition Time"
                        }
                    ],
                    "pt": [
                        {
                            "fieldExpression": "BRIGHTNESS",
                            "label": "Brightness"
                        },
                        {
                            "fieldExpression": "CONFIDENCE",
                            "label": "Confidence"
                        },
                        {
                            "fieldExpression": "LATITUDE",
                            "label": "Latitude"
                        },
                        {
                            "fieldExpression": "LONGITUDE",
                            "label": "Longitude"
                        },
                        {
                            "fieldExpression": "ACQ_DATE:DateString(hideTime:true)",
                            "label": "Acquisition Date"
                        },
                        {
                            "fieldExpression": "ACQ_TIME",
                            "label": "Acquisition Time"
                        }
                    ],
                    "ka": [
                        {
                            "fieldExpression": "BRIGHTNESS",
                            "label": "Brightness"
                        },
                        {
                            "fieldExpression": "CONFIDENCE",
                            "label": "Confidence"
                        },
                        {
                            "fieldExpression": "LATITUDE",
                            "label": "Latitude"
                        },
                        {
                            "fieldExpression": "LONGITUDE",
                            "label": "Longitude"
                        },
                        {
                            "fieldExpression": "ACQ_DATE:DateString(hideTime:true)",
                            "label": "Acquisition Date"
                        },
                        {
                            "fieldExpression": "ACQ_TIME",
                            "label": "Acquisition Time"
                        }
                    ],
                    "es": [
                        {
                            "fieldExpression": "BRIGHTNESS",
                            "label": "Brightness"
                        },
                        {
                            "fieldExpression": "CONFIDENCE",
                            "label": "Confidence"
                        },
                        {
                            "fieldExpression": "LATITUDE",
                            "label": "Latitude"
                        },
                        {
                            "fieldExpression": "LONGITUDE",
                            "label": "Longitude"
                        },
                        {
                            "fieldExpression": "ACQ_DATE:DateString(hideTime:true)",
                            "label": "Acquisition Date"
                        },
                        {
                            "fieldExpression": "ACQ_TIME",
                            "label": "Acquisition Time"
                        }
                    ],
                    "fr": [
                        {
                            "fieldExpression": "BRIGHTNESS",
                            "label": "Brightness"
                        },
                        {
                            "fieldExpression": "CONFIDENCE",
                            "label": "Confidence"
                        },
                        {
                            "fieldExpression": "LATITUDE",
                            "label": "Latitude"
                        },
                        {
                            "fieldExpression": "LONGITUDE",
                            "label": "Longitude"
                        },
                        {
                            "fieldExpression": "ACQ_DATE:DateString(hideTime:true)",
                            "label": "Acquisition Date"
                        },
                        {
                            "fieldExpression": "ACQ_TIME",
                            "label": "Acquisition Time"
                        }
                    ],
                    "en": [
                        {
                            "fieldExpression": "BRIGHTNESS",
                            "label": "Brightness"
                        },
                        {
                            "fieldExpression": "CONFIDENCE",
                            "label": "Confidence"
                        },
                        {
                            "fieldExpression": "LATITUDE",
                            "label": "Latitude"
                        },
                        {
                            "fieldExpression": "LONGITUDE",
                            "label": "Longitude"
                        },
                        {
                            "fieldExpression": "ACQ_DATE:DateString(hideTime:true)",
                            "label": "Acquisition Date"
                        },
                        {
                            "fieldExpression": "ACQ_TIME",
                            "label": "Acquisition Time"
                        }
                    ]
                },
                "title": {
                    "ka": "VIIRS აქტიური ხანძრები",
                    "zh": "VIIRS 活跃火点",
                    "id": "Kebakaran Aktif VIIRS",
                    "pt": "Incêndios ativos VIIRS",
                    "es": "Incendios activos VIIRS",
                    "fr": "Incendies actifs VIIRS",
                    "en": "VIIRS Active Fires"
                }
            },
            "sublabel": {
                "ka": "(ყოველდღიური, 375 მ, გლობალური, NASA)",
                "zh": "（每天，375m，全球，NASA）",
                "id": "(harian, 375m, global, NASA)",
                "pt": "(diário, 375 m, global, NASA)",
                "es": "(Diaria, 375m, global, NASA)",
                "fr": "(quotidiens, 375 m, mondial, NASA)",
                "en": "(daily, 375m, global, NASA)"
            },
            "label": {
                "ka": "VIIRS აქტიური ხანძრები",
                "zh": "VIIRS 活跃火点",
                "id": "Kebakaran Aktif VIIRS",
                "pt": "Incêndios ativos VIIRS",
                "es": "Incendios activos VIIRS",
                "fr": "Incendies actifs VIIRS",
                "en": "VIIRS Active Fires"
            },
            "technicalName": "viirs_fires",
            "url": "https://tiles.globalforestwatch.org/nasa_viirs_fire_alerts/latest/dynamic/{start_date}/{end_date}/VectorTileServer",
            "type": "Vector.Layer",
            "id": "VIIRS_ACTIVE_FIRES",
            "metadata": {
                "metadata": {
                    "function": "<p>Displays fire alert data for the past 24 hours, 48 hours, 72 hours, or 7 days</p>",
                    "geographic_coverage": "<p>Global</p>",
                    "download_data": "https://earthdata.nasa.gov/earth-observation-data/near-real-time/firms/active-fire-data",
                    "map_service": "",
                    "subtitle": "(daily, 375 m, global, NASA)",
                    "license": "<p>We acknowledge  the use of data and imagery from LANCE FIRMS operated by the NASA/GSFC/Earth Science Data and Information System (ESDIS) with funding provided by NASA/HQ.</p><p><a href=\"http://science.nasa.gov/earth-science/earth-science-data/data-information-policy/\">NASA Data &amp; Information Policy</a></p>",
                    "title": "VIIRS active fires",
                    "agol_id": "",
                    "overview": "<p>The VIIRS active fires data (<a href=\"https://earthdata.nasa.gov/earth-observation-data/near-real-time/firms/v1-vnp14imgt\">VNP14IMGT</a>) is the latest fire monitoring product to FIRMS (Fire Information for Resource Management System), which identifies global fire locations in near-real time. Information is collected from the Visible Infrared Imaging Radiometer Suite (VIIRS) sensor, and processed with a <a href=\"http://www.sciencedirect.com/science/article/pii/S0034425713004483\">fire detection algorithm</a> to flag active fires. Each dot on the map represents the center of a 375 meter pixel that has been flagged by the algorithm. </p><p>The VIIRS data replaces the active fires data from MODIS that was previously available on Global Forest Watch. The VIIRS data has higher spatial resolution (375-meter pixels vs. 1-kilometer pixels) which improves detection of smaller fires and provides a more reliable estimate of fire perimeters. The VIIRS data is also better calibrated to detect fires at night.</p><p>The active fires data is available to view and download for the past 24 hours, 48 hours,  or 7 days. Older fire data will be available for download from the <a href=\"https://earthdata.nasa.gov/earth-observation-data/near-real-time/firms\">NASA FIRMS</a> website beginning in mid-2016.</p><p>Each fire alert has a confidence value of low, nominal, or high to help users gauge the quality of individual hotspot /fire pixels.</p>",
                    "citation": "<p>NASA FIRMS. “VIIRS Active Fires.” Accessed through Global Forest Watch on [date]. www.globalforestwatch.org </p>",
                    "cautions": "<p>Not all fires are detected. There are several reasons why VIIRS may not have detected a certain fire. The fire may have started and ended between satellite overpasses. The fire may have been too small or too cool to be detected in the 375-meter pixel. Cloud cover, heavy smoke, or tree canopy may completely obscure a fire.</p><p>It is not recommended to use active fire locations to estimate burned area due to spatial and temporal sampling issues.</p><p>When zoomed out, this data layer displays some degree of inaccuracy because the data points must be collapsed to be visible on a larger scale. Zoom in for greater detail.</p>",
                    "date_of_content": "<p>Near-real time</p>",
                    "learn_more": "https://earthdata.nasa.gov/earth-observation-data/near-real-time/firms/viirs-i-band-active-fire-data ",
                    "source": "<p>NASA</p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>375 × 375 meters</p>",
                    "frequency_of_updates": "<p>Two times daily</p>",
                    "tags": "Forest Change"
                },
                "legendConfig": {
                    "items": [
                        {
                            "color": "#472020",
                            "name": {
                                "en": "High concentration",
                                "es": "High concentration",
                                "fr": "High concentration",
                                "id": "High concentration",
                                "ka": "High concentration",
                                "pt": "High concentration"
                            }
                        },
                        {
                            "color": "#a72524",
                            "name": {
                                "en": "",
                                "es": "",
                                "fr": "",
                                "id": "",
                                "ka": "",
                                "pt": ""
                            }
                        },
                        {
                            "color": "#ffce0f",
                            "name": {
                                "en": "",
                                "es": "",
                                "fr": "",
                                "id": "",
                                "ka": "",
                                "pt": ""
                            }
                        },
                        {
                            "color": "#ffcc02",
                            "name": {
                                "en": "Low concentration",
                                "es": "Low concentration",
                                "fr": "Low concentration",
                                "id": "Low concentration",
                                "ka": "Low concentration",
                                "pt": "Low concentration"
                            }
                        }
                    ],
                    "source": "(daily, 375m, global, NASA)",
                    "notes": [
                        "For more information about this layer {hyperlink}"
                    ],
                    "name": {
                        "ka": "VIIRS აქტიური ხანძრები",
                        "zh": "VIIRS 活跃火点",
                        "id": "Kebakaran Aktif VIIRS",
                        "pt": "Incêndios ativos VIIRS",
                        "es": "Incendios activos VIIRS",
                        "fr": "Incendies actifs VIIRS",
                        "en": "VIIRS Active Fires"
                    },
                    "type": "gradient"
                },
                "interactionConfig": {
                    "type": "info",
                    "config": {
                        "url": "https://data-api.globalforestwatch.org/dataset/nasa_viirs_fire_alerts/latest/features"
                    }
                }
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 8,
        "layerGroupId": "GROUP_LCD",
        "dataLayer": {
            "id": "GFW_INTEGRATED_ALERTS",
            "order": 8,
            "type": "remoteDataLayer",
            "uuid": "bd58f25d-d3bb-4d59-9daa-cecddd27d9f4",
            "groupId": "GROUP_LCD"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "function": "<p>Monitor forest disturbance in near-real-time using integrated alerts from three alerting systems </p>",
                    "geographic_coverage": "<p>30°N to 30°S</p>",
                    "download_data": "https://data.globalforestwatch.org/datasets/gfw::integrated-deforestation-alerts/about",
                    "map_service": "",
                    "subtitle": "daily, 10m, tropics, UMD/GLAD and WUR",
                    "license": "<p><a href=\"https://creativecommons.org/licenses/by/4.0/\">CC by 4.0</a></p>",
                    "title": "Integrated deforestation alerts",
                    "agol_id": "",
                    "overview": "<p>This dataset, assembled by Global Forest Watch, aggregates deforestation alerts from three alert systems (GLAD-L, GLAD-S2, RADD) into a single, integrated deforestation alert layer. This integration allows users to detect deforestation events faster than any single system alone, as the integrated layer is updated when any of the source alert systems are updated. </p><p>The source alert systems are derived from satellites of varying spectral and spatial resolutions. 30 m <a href=\"https://gfw.global/2Lv8vVc\">GLAD Landsat-based alerts</a> are up-sampled to match the 10 m spatial resolution of Sentinel-based alerts (<a href=\"https://gfw.global/3vxHe7F\">GLAD-S2</a>, <a href=\"https://gfw.global/3ca04tV\">RADD</a>). This avoids the double counting of overlapping alerts, which are instead classified at a higher confidence level, indicated by darker pixels. </p><p>Alerts are classified as _high_ confidence when detected twice by a single alert system. This can occur in areas and at times when only one alert system was operating. Where multiple alert systems are operating, alerts detected by multiple (two or three) of these systems are classified as _highest_ confidence. With multiple sensors picking up change in the same location, we can be more confident that an alert was not a false positive and do not need to wait for additional satellite imagery to increase confidence in detected loss, thus providing more confident alerting faster than with a single system. </p><p>A study conducted by Wageningen University in collaboration with researchers from Global Forest Watch and University of Maryland's GLAD lab found that integrating alert systems results in faster detection of new disturbances by days to months, and also shortens the delay to increase confidence. Combined alerts have a higher producer's accuracy (fewer false negatives), but a lower user's accuracy (more false positives) since the commission errors from each system are combined; however, \"highest confidence\" alerts, where more than one system detected the change, effectively eliminated false detections. Learn more: <a href=\"https://iopscience.iop.org/article/10.1088/1748-9326/ad2d82\">https://iopscience.iop.org/article/10.1088/1748-9326/ad2d82</a></p>",
                    "citation": "<p>Source: \"Integrated Deforestation Alerts\". UMD/GLAD and WUR, accessed through Global Forest Watch</p>",
                    "cautions": "<ul><br><li>Although called ‘deforestation alerts’ these alerts detect forest or tree cover disturbances. This product does not distinguish between human-caused and other disturbance types. Where alerts are detected within plantation forests (more likely to happen in the GLAD-L system), alerts may indicate timber harvesting operations, without a conversion to a non-forest land use. </li><br><li>The term deforestation is used because these are potential deforestation events, and alerts could be further investigated to determine this.  </li><br><li>We do not recommend using deforestation alerts for global or regional trend assessment, nor for area estimates. We recommend using the annual tree cover loss data for a more accurate comparison of the trends in forest change over time, and for area estimates. Recent alerts will include false positives that have yet to raise their confidence level and may eventually be removed. Past alerts may have been removed in error from the database if rapid canopy closure precedes the additional unobscured satellite observations within 6 months. Additionally, updates to the methodologies, differing number of systems (in the case of the integrated alerts), and variation in cloud cover between months and years pose additional risks to using deforestation alerts for inter/intra-annual comparison.</li><br><li>The alerts can be ‘curated’ to identify those alerts of interest to a user, such as those alerts which are likely to be deforestation and might be prioritized for action. A user can do this by overlaying other contextual datasets, such as protected areas, or planted trees. The non-curated data are provided here in order that users can define their own prioritization approaches. Curated alert locations are provided in the Places to Watch data layer.<br>The three alert systems have different definitions of forest/tree cover, and forest/tree cover disturbances: <br /><br><ul><br><li><strong>GLAD-L</strong>: alerts are within “tree cover” which is defined as all vegetation greater than 5 meters in height with greater than 60% canopy cover, and may take the form of natural forests or plantations. “Tree cover loss” indicates the canopy removal of at least half a pixel and can be due to a variety of factors, including mechanical harvesting, fire, disease, or storm damage. As such, “loss” does not equate to deforestation. </li><br><li><strong>GLAD-S2</strong>: alerts are within the primary forest mask of <a href=\"https://doi.org/10.1088/1748-9326/aacd1c\">Turubanova et al (2018)</a> in the Amazon river basin, with 2001-present forest loss from <a href=\"https://doi.org/10.1126/science.1244693\">Hansen et al. (2013)</a> removed. </li><br><li><strong>RADD</strong>: alerts are within primary humid forests. Forest loss is defined as complete or partial removal of tree cover within a pixel, and a minimum-mapping unit of 0.5 ha is used. <br>The input alert systems do not have the same spatial and temporal coverage:</li><br><li><strong>GLAD-L</strong>: Operating in the entire tropics (30°N to 30°S) from January 1, 2018 to the present, and from 2015 to the present (although paused for a period during 2022) for select countries in the Amazon, Congo Basin, and insular Southeast Asia </li><br><li><strong>GLAD-S2</strong>: Operating in the primary humid tropical forest areas of South America from January 2019 to the present </li><br><li><strong>RADD</strong>: Operating in the primary humid tropical forest areas of South America, sub-Saharan Africa and insular Southeast Asia with coverage from January 2019 to the present for Africa and January 2020 to the present for South America and Southeast Asia, with Central America covered from January 2023 (expansion to continental SE Asia and the Pacific is forthcoming by end 2023) </li><br></ul></li><br><li>In order to integrate the three alerting systems on a common grid, GLAD-L is resampled from a 30 m spatial resolution to 10 m to match GLAD-S2 and RADD. As a result, a single 30 m GLAD-L pixel will become multiple 10 m pixels in the integrated layer. Users should use caution when comparing the analysis results of individual systems to the integrated alert layer, as the number of integrated alerts will be much greater than the number of native GLAD-L alerts. In addition, pixels in the integrated layer may not exactly align on the map with pixels in the individual GLAD-L layer as a result of this resampling.  </li><br><li>Each pixel in the integrated layer preserves the earliest date of detection from any alerting system, even if multiple systems have reported an alert in that pixel. In some situations, this may lead to inconsistent visualizations when switching from the integrated layer to individual alerting system layers. It is advisable to use the integrated layer when you are interested in the earliest date of detection by any alerting system. However, it is better to use the individual alerting system layers if you are interested in a specific alert type. </li><br><li>The “Highest confidence: detected by multiple alert systems” level can only be achieved in areas and for time periods where more than one alert system was in operation for that region.  </li><br><li>The confidence level may change retroactively as source data is updated; alerts that have not become high confidence within 180 days are removed from the dataset.</li><br><li>Once an alert pixel reaches high confidence, forest loss will not be detected by the same alert system at that location again</li><br><li>Accuracies vary across the coverage of the integrated alerts, due to different characteristics of the three alert systems – Radar (RADD) alerts for example may have more false detections in swamp forests due to the high sensitivity of short wavelength C-band radar to moisture variation</li><br><li>When zoomed out, this data layer displays some degree of inaccuracy because the data points must be collapsed to be visible on a larger scale. Zoom in for greater detail.   </li><br></ul>",
                    "date_of_content": "<p>January 1st, 2019 – present </p>",
                    "learn_more": "",
                    "source": "<p><em>GLAD Alerts:</em><br>Hansen, M.C., A. Krylov, A. Tyukavina, P.V. Potapov, S. Turubanova, B. Zutta, S. Ifo, B. Margono, F. Stolle, and R. Moore. 2016. Humid tropical forest disturbance alerts using Landsat data. Environmental Research Letters, 11 (3). (https://dx.doi.org/10.1088/1748-9326/11/3/034008)[https://dx.doi.org/10.1088/1748-9326/11/3/034008] </p><p><em>GLAD-S2 Alerts:</em><br>Pickens, A.H., Hansen, M.C., Adusei, B., and Potapov P. 2020. Sentinel-2 Forest Loss Alert. Global Land Analysis and Discovery (GLAD), University of Maryland. </p><p><em>RADD Alerts:</em><br>Reiche, J., Mullissa, A., Slagter, B., Gou, Y., Tsendbazar, N.E., Braun, C., Vollrath, A., Weisse, M.J., Stolle, F., Pickens, A., Donchyts, G., Clinton, N., Gorelick, N., Herold, M. 2021. Forest disturbance alerts for the Congo Basin using Sentinel-1. Environmental Research Letters. (https://doi.org/10.1088/1748-9326/abd0a8)[https://doi.org/10.1088/1748-9326/abd0a8]</p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>10 × 10 m</p>",
                    "frequency_of_updates": "<p>Daily</p>",
                    "tags": "Forest Change"
                },
                "legendConfig": {
                    "name": {
                        "ka": "ინტეგრირებული ტყის გაჩეხვის გაფრთხილებები",
                        "zh": "综合毁林警报",
                        "id": "Peringatan Deforestasi Terpadu",
                        "pt": "Alertas de desflorestação integrados",
                        "es": "Alertas de deforestación integradas",
                        "fr": "Alertes intégrées sur la déforestation",
                        "en": "Integrated deforestation alerts"
                    },
                    "type": "basic",
                    "items": [
                        {
                            "outlineColor": "#555555",
                            "color": "#EDA4C3",
                            "name": {
                                "ka": "Հայտնաբերվել է մեկ ահազանգման համակարգով",
                                "zh": "由单一警报系统检测到",
                                "id": "Terdeteksi oleh satu sistem peringatan",
                                "pt": "Detectado por um único sistema de alerta",
                                "es": "Detectado por un solo sistema de alerta",
                                "fr": "Détectée par un seul système d'alerte",
                                "en": "Detected by a single alert system"
                            }
                        },
                        {
                            "outlineColor": "#555555",
                            "color": "#DC6699",
                            "name": {
                                "ka": "Բարձր վստահություն. հայտնաբերվում է մեկից ավելի անգամ մեկ ահազանգման համակարգի միջոցով",
                                "zh": "高置信度：由单一警报系统检测到一次以上",
                                "id": "Keyakinan tinggi: terdeteksi lebih dari satu kali oleh satu sistem peringatan",
                                "pt": "Alta confiança: detectado mais de uma vez por um único sistema de alerta",
                                "es": "Alta confianza: Detectado más de una vez por un solo sistema de alerta",
                                "fr": "Confiance élevée : détectée plus d'une fois par un seul système d'alerte",
                                "en": "High confidence: detected more than once by a single alert system"
                            }
                        },
                        {
                            "outlineColor": "#555555",
                            "color": "#C92A6D",
                            "name": {
                                "ka": "Ամենաբարձր վստահությունը. հայտնաբերվում է բազմաթիվ ահազանգման համակարգերով",
                                "zh": "置信度最高：由多个警报系统检测到",
                                "id": "Keyakinan tertinggi: terdeteksi oleh beberapa sistem peringatan",
                                "pt": "Confiança mais alta: detectado por vários sistemas de alerta",
                                "es": "Muy alta confianza: Detectado por múltiples sistemas de alertas",
                                "fr": "Confiance plus élevée : détectée par plusieurs systèmes d'alerte",
                                "en": "Highest confidence: detected by multiple alert systems"
                            }
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "sublabel": {
                "ka": "(ყოველკვირეული, 30მ, აარჩიეთ ქვეყნები, UMD/ GLAD)",
                "zh": "（每周，10m，热带地区，UMD/ GLAD）",
                "id": "(sehari-hari, 10m, tropis. UMD/GLAD)",
                "pt": "(diária, 10m, trópicos, UMD/ GLAD)",
                "es": "(diaria, 10m, trópicos, UMD/ GLAD)",
                "fr": "(diária, 10m, tropiques, UMD/ GLAD)",
                "en": "(daily, 10m, tropics, UMD/GLAD and WUR)"
            },
            "label": {
                "ka": "ინტეგრირებული ტყის გაჩეხვის გაფრთხილებები",
                "zh": "综合毁林警报",
                "id": "Peringatan Deforestasi Terpadu",
                "pt": "Alertas de desflorestação integrados",
                "es": "Alertas de deforestación integradas",
                "fr": "Alertes intégrées sur la déforestation",
                "en": "Integrated Deforestation Alerts"
            },
            "confidence": [
                0,
                1
            ],
            "maxDateValue": 999999,
            "minDateValue": 15000,
            "technicalName": "gfw_integrated_alerts",
            "url": "https://tiles.globalforestwatch.org/gfw_integrated_alerts/latest/default/{z}/{x}/{y}.png",
            "type": "integrated-alert-layer",
            "id": "GFW_INTEGRATED_ALERTS"
        },
        "isMetadataError": false,
        "isError": false
    },
    // {
    //     "order": 9,
    //     "layerGroupId": "GROUP_LCD",
    //     "dataLayer": {
    //         "id": "GLAD_S2_ALERTS",
    //         "order": 9,
    //         "type": "remoteDataLayer",
    //         "uuid": "3b869953-48c4-48d0-8023-5c64a311f3dd",
    //         "groupId": "GROUP_LCD"
    //     },
    //     "layer": {
    //         "metadata": {
    //             "metadata": {
    //                 "function": "<p>Identifies areas of primary forest loss  in near real time using Sentinel-2 imagery</p>",
    //                 "geographic_coverage": "<p>Amazon basin</p>",
    //                 "download_data": "https://glad.earthengine.app/view/s2-forest-alerts",
    //                 "map_service": "",
    //                 "subtitle": "(weekly, 10m, select countries, UMD / GLAD)",
    //                 "license": "<p><a href=\"https://creativecommons.org/licenses/by/4.0/\">CC BY 4.0</a></p>",
    //                 "title": "Deforestation alerts (GLAD-S2)",
    //                 "agol_id": "",
    //                 "overview": "<p>This data set is a forest loss alert product developed by the <a href=\"https://glad.geog.umd.edu/\">GLAD</a> (Global Land Analysis and Discovery) lab at the University of Maryland. GLAD-S2 alerts utilize data from the European Space Agency’s Sentinel-2 mission, which provides optical imagery at a 10m spatial resolution with a 5-day revisit time. The shorter revisit time, when compared to GLAD Landsat alerts, reduces the time to detect forest loss and between the initial detection of forest loss and classification as high confidence. This is particularly advantageous in wet and tropical regions, where persistent cloud cover may delay detections for weeks to months. GLAD-S2 alerts are available for primary forests in the Amazon basin from January 1st 2019 to present, updated daily.</p><p>New Sentinel-2 images are analyzed as soon as they are acquired. Cloud, shadow, and water are filtered out of each new image, and a forest loss algorithm is applied to all remaining clear land observations. The algorithm relies on the spectral data in each new image in combination with spectral metrics from a baseline period of the previous two years.</p><p>Alerts become high confidence when at least two of four subsequent observations are flagged as forest loss (this corresponds to “high,” “medium,” and “low” confidence loss on the GLAD app linked below). The alert date represents the date of forest loss detection. Users can choose to display only high confidence alerts on the map, but keep in mind this will filter out the most recent detections of forest loss. Additionally, forest loss will not be detected again on pixels with high confidence alerts. Alerts that have not become high confidence within 180 days are removed from the data set.</p>",
    //                 "citation": "<p>Use the following credit when this data is displayed:<br>Source: GLAD/UMD, accessed through Global Forest Watch on [date]</p><p>Use the following credit when this data is cited:<br>Pickens, A.H., Hansen, M.C., Adusei, B., and Potapov P. 2020. Sentinel-2 Forest Loss Alert. Global Land Analysis and Discovery (GLAD), University of Maryland. Accessed through Global Forest Watch on [date]. www.globalforestwatch.org</p>",
    //                 "cautions": "<ul><br><li><p>Results are masked to only within the primary forest mask of <a href=\"https://iopscience.iop.org/article/10.1088/1748-9326/aacd1c\">Turubanova et al (2018)</a> in the Amazon river basin, with 2001-2018 forest loss from <a href=\"https://science.sciencemag.org/content/342/6160/850\">Hansen et al. (2013)</a> removed.</p></li><br><li><p>Alerts that have been detected in two out of four consecutive images are classified as high confidence. Pixels with high confidence alerts cannot be alerted again.</p></li><br><li><p>The accuracy of this product has not been assessed</p></li><br></ul>",
    //                 "date_of_content": "<p>January 1st, 2019 – present</p>",
    //                 "learn_more": "https://glad.earthengine.app/view/s2-forest-alerts",
    //                 "source": "<p>Pickens, A.H., Hansen, M.C., Adusei, B., and Potapov P. 2020. Sentinel-2 Forest Loss Alert. Global Land Analysis and Discovery (GLAD), University of Maryland.</p>",
    //                 "carto_table": "",
    //                 "amazon_link": "",
    //                 "translation": {
    //                     "fr": {},
    //                     "es": {}
    //                 },
    //                 "other": "",
    //                 "resolution": "<p>10 x 10m</p>",
    //                 "frequency_of_updates": "<p>Updated daily, image revisit time every 5 days</p>",
    //                 "tags": "Forest Change"
    //             },
    //             "legendConfig": {
    //                 "name": {
    //                     "ka": "GLAD შეტყობინებები",
    //                     "zh": "GLAD 预警",
    //                     "id": "Peringatan GLAD",
    //                     "pt": "Alertas GLAD",
    //                     "es": "Alertas GLAD",
    //                     "fr": "Alertes GLAD",
    //                     "en": "GLAD S2 Alerts"
    //                 },
    //                 "type": "basic",
    //                 "items": [
    //                     {
    //                         "outlineColor": "#555555",
    //                         "color": "#DC6699",
    //                         "name": {
    //                             "ka": "GLAD შეტყობინებები",
    //                             "zh": "GLAD 预警",
    //                             "id": "Peringatan GLAD",
    //                             "pt": "Alertas GLAD",
    //                             "es": "Alertas GLAD",
    //                             "fr": "Alertes GLAD",
    //                             "en": "GLAD S2 Alerts"
    //                         }
    //                     },
    //                     {
    //                         "outlineColor": "#555555",
    //                         "color": "#e4c600",
    //                         "name": {
    //                             "ka": "ბოლო შეტყობინებები",
    //                             "zh": "最近的提醒",
    //                             "id": "Lansiran Terbaru",
    //                             "pt": "Alertas Recentes",
    //                             "es": "Alertas recientes",
    //                             "fr": "Alertes récentes",
    //                             "en": "Recent Alerts"
    //                         }
    //                     }
    //                 ]
    //             },
    //             "interactionConfig": {}
    //         },
    //         "sublabel": {
    //             "ka": "(ყოველკვირეული, 30მ, აარჩიეთ ქვეყნები, UMD/ GLAD)",
    //             "zh": "（每周，30m，热带地区，UMD/ GLAD）",
    //             "id": "(mingguan, 30m, tropis. UMD/GLAD)",
    //             "pt": "(semanal, 30m, trópicos, UMD/ GLAD)",
    //             "es": "(semanal, 30m, trópicos, UMD/ GLAD)",
    //             "fr": "(hebdomadaire, 30m, tropiques, UMD/ GLAD)",
    //             "en": "(every 5 days, 10m, Amazon Basin, UMD/GLAD)"
    //         },
    //         "label": {
    //             "ka": "GLAD S2 Alerts",
    //             "zh": "GLAD S2 Alerts",
    //             "id": "GLAD S2 Alerts",
    //             "pt": "GLAD S2 Alerts",
    //             "es": "GLAD S2 Alerts",
    //             "fr": "GLAD S2 Alerts",
    //             "en": "GLAD S2 Alerts"
    //         },
    //         "confidence": [
    //             0,
    //             1
    //         ],
    //         "maxDateValue": 999999,
    //         "minDateValue": 15000,
    //         "technicalName": "umd_glad_sentinel2_alerts",
    //         "url": "https://tiles.globalforestwatch.org/umd_glad_sentinel2_alerts/latest/default/{z}/{x}/{y}.png",
    //         "type": "glad",
    //         "id": "GLAD_S2_ALERTS"
    //     },
    //     "isMetadataError": false,
    //     "isError": false
    // },
    // {
    //     "order": 10,
    //     "layerGroupId": "GROUP_LCD",
    //     "dataLayer": {
    //         "id": "RADD_ALERTS",
    //         "order": 10,
    //         "type": "remoteDataLayer",
    //         "uuid": "440e53d0-36b3-47ad-993a-1c2018c3942c",
    //         "groupId": "GROUP_LCD"
    //     },
    //     "layer": {
    //         "metadata": {
    //             "metadata": {
    //                 "function": "<p>Near-real-time forest disturbance alerts in primary humid tropical forests using Sentinel-1’s cloud-penetrating radar sensors </p>",
    //                 "geographic_coverage": "<p>Humid tropical forest in South America, Central America, sub-Saharan Africa and insular Southeast Asia (expansion to continental SE Asia and the Pacific is forthcoming by end 2023) </p>",
    //                 "download_data": "http://radd-alert.wur.nl",
    //                 "map_service": "",
    //                 "subtitle": "(every 6-12 days, 10m, select countries, WUR)",
    //                 "license": "",
    //                 "title": "Deforestation alerts (RADD)",
    //                 "agol_id": "",
    //                 "overview": "<p>RAdar for Detecting Deforestation (RADD) is a deforestation alert product that uses data from the European Space Agency’s Sentinel-1 satellites to detect forest disturbances in near-real-time and to confirm alerts within weeks. The RADD  alerts use a detection methodology produced by Wageningen University and Research (WUR), Laboratory of Geo-information Science and Remote Sensing. These alerts are particularly advantageous in monitoring tropical forests, as Sentinel-1’s cloud-penetrating radar and frequent revisit times (6-12 days) allow for more consistent monitoring than alert products based on optical satellite images. Alerts are available for the primary humid tropical forest areas of South America, sub-Saharan Africa and insular Southeast Asia at a 10m spatial resolution, with coverage from January 2019 to the present for Africa and January 2020 to the present for South America and Southeast Asia. Central America is covered from January 2023, and expansion to continental SE Asia and Pacific is forthcoming by end 2023. Pre-processed Sentinel-1 images are collected from Google Earth Engine, then quality controlled and normalized using historical time-series metrics. Forest disturbance alerts are then detected using a probabilistic algorithm. Each disturbance alert is detected from a single observation in the latest image, and then marked as high confidence with subsequent imagery within a maximum 90-day period if the forest disturbance probability is above 97.5%. Unconfirmed alerts are provided for forest disturbance probabilities above 85%. The product has a minimum mapping unit of 0.1 ha (equivalent to 10 Sentinel-1 pixels) to minimize false detections. Alerts are detected within areas of primary humid tropical forest, defined by <a href=\"https://iopscience.iop.org/article/10.1088/1748-9326/aacd1c/meta\">Turubanova et al. (2018)</a> and with 2001-2018 forest loss <a href=\"https://www.science.org/doi/10.1126/science.1244693\">(Hansen et al. 2013)</a> and mangrove <a href=\"https://www.mdpi.com/2072-4292/10/10/1669\">(Bunting et al. 2018)</a> removed. For more information on methodology and validation, please refer to <a href=\"https://doi.org/10.1088/1748-9326/abd0a8\">Reiche et. al. (2021)</a>. The version presented here (v1) has been updated from that described in the paper (v0), with changes to the forest mask and a reduction of the minimum mapping unit. </p><p>The RADD alerts were made possible thanks to the support of a coalition of <a href=\"https://www.wri.org/news/2019/10/release-palm-oil-industry-jointly-develop-radar-monitoring-technology-detect\">ten major palm oil producers and buyers</a>. Under the project, Wageningen University and Research (WUR) developed the detection method and Satelligence first scaled the system in Indonesia and Malaysia and provided additional prioritization of alerts for on-the-ground follow up. Additional support was provided by the US Forest Service and Norway’s International Climate and Forest Initiative. The alerts are currently operated by WUR using Google Earth Engine. </p>",
    //                 "citation": "<p>Source: \"RADD alerts\". WUR, accessed through Global Forest Watch</p>",
    //                 "cautions": "<ul><br><li>Although called ‘deforestation alerts’ these alerts detect forest or tree cover disturbances. This product does not distinguish between human-caused and other disturbance types. Where alerts are detected within plantation forests (more likely to happen in the GLAD-L system), alerts may indicate timber harvesting operations, without a conversion to a non-forest land use. </li><br><li>The term deforestation is used because these are potential deforestation events, and alerts could be further investigated to determine this. </li><br><li>We do not recommend using deforestation alerts for global or regional trend assessment, nor for area estimates. We recommend using the annual tree cover loss data for a more accurate comparison of the trends in forest change over time, and for deforestation area estimates. Recent alerts will include false positives that have yet to raise their confidence level, and may eventually be removed. Past alerts may have been removed in error from the database if rapid canopy closure precedes the additional unobscured satellite observations within 6 months. Additionally, updates to the methodologies, differing number of systems (in the case of the integrated alerts), and variation in cloud cover between months and years pose additional risks to using deforestation alerts for inter/intra-annual comparison.  </li><br><li>The alerts can be ‘curated’ to identify those alerts of interest to a user, such as those alerts which are likely to be deforestation and might be prioritized for action. A user can do this by overlaying other contextual datasets, such as protected areas, or planted trees. The non-curated data are provided here in order that users can define their own prioritization approaches. Curated alert locations are provided in the Places to Watch data layer.</li><br><li>False detections may occur in swamp forests due to the high sensitivity of short wavelength C-band radar to moisture variations </li><br><li>Small-scale changes (e.g., logging roads, small-scale agriculture) are typically detected in a timely manner as forest edges are relatively straightforward to detect using short wavelength C-band radar. Large-scale patches (e.g., plantation expansion) may take longer to reach a high enough probability to be flagged as alerts. Those large patches may appear similar to undisturbed forest in the radar image due to conditions like wet soil or remaining woody debris. </li><br><li>The product is constrained by the global forest baseline used, which may result in inconsistencies at the local level. In areas that are incorrectly labelled as primary forest in the baseline, there may be some commission errors in the alerts. In areas where forest loss occurred prior to the start of the RADD alerts but was missed by the baseline input data (and thus not removed from the forest baseline), alerts may be detected well after the disturbance occurred. This will only affect alerts from early 2019 (Africa) and early 2020 (other geographies).</li><br><li>The confidence level may change retroactively as source data is updated; alerts that have not become high confidence within 90 days are removed from the dataset.</li><br><li>Once an alert pixel reaches high confidence, forest loss will not be detected at that location again. </li><br><li>A validation of confirmed alerts in the Congo Basin indicated a high level of accuracy (2% false positives, 5% false negatives) for disturbances greater than 0.2 ha. </li><br><li>When zoomed out, this data layer displays some degree of inaccuracy because the data points must be collapsed to be visible on a larger scale. Zoom in for greater detail.   </li><br></ul>",
    //                 "date_of_content": "<p>Africa: January 2019 – present<br>South America, Central America, and Southeast Asia: January 2020 – present</p>",
    //                 "learn_more": "http://radd-alert.wur.nl",
    //                 "source": "<p>Reiche, J., Mullissa, A., Slagter, B., Gou, Y., Tsendbazar, N.E., Braun, C., Vollrath, A., Weisse, M.J., Stolle, F., Pickens, A., Donchyts, G., Clinton, N., Gorelick, N., Herold, M. 2021. Forest disturbance alerts for the Congo Basin using Sentinel-1. Environmental Research Letters. <a href=\"https://doi.org/10.1088/1748-9326/abd0a8\">https://doi.org/10.1088/1748-9326/abd0a8</a></p>",
    //                 "carto_table": "",
    //                 "amazon_link": "",
    //                 "translation": {
    //                     "fr": {},
    //                     "es": {}
    //                 },
    //                 "other": "",
    //                 "resolution": "<p>10 x 10m, with a minimum mapping unit of 0.1ha</p>",
    //                 "frequency_of_updates": "<p>Every 6-12 days</p>",
    //                 "tags": "Forest Change"
    //             },
    //             "legendConfig": {
    //                 "name": {
    //                     "ka": "RADD შეტყობინებები",
    //                     "zh": "RADD 预警",
    //                     "id": "Peringatan RADD",
    //                     "pt": "Alertas RADD",
    //                     "es": "Alertas RADD",
    //                     "fr": "Alertes RADD",
    //                     "en": "RADD Alerts"
    //                 },
    //                 "type": "basic",
    //                 "items": [
    //                     {
    //                         "outlineColor": "#555555",
    //                         "color": "#DC6699",
    //                         "name": {
    //                             "ka": "RADD შეტყობინებები",
    //                             "zh": "RADD 预警",
    //                             "id": "Peringatan RADD",
    //                             "pt": "Alertas RADD",
    //                             "es": "Alertas RADD",
    //                             "fr": "Alertes RADD",
    //                             "en": "RADD Alerts"
    //                         }
    //                     },
    //                     {
    //                         "outlineColor": "#555555",
    //                         "color": "#e4c600",
    //                         "name": {
    //                             "ka": "ბოლო შეტყობინებები",
    //                             "zh": "最近的提醒",
    //                             "id": "Lansiran Terbaru",
    //                             "pt": "Alertas Recentes",
    //                             "es": "Alertas recientes",
    //                             "fr": "Alertes récentes",
    //                             "en": "Recent Alerts"
    //                         }
    //                     }
    //                 ]
    //             },
    //             "interactionConfig": {}
    //         },
    //         "sublabel": {
    //             "ka": "(ყოველკვირეული, 30მ, აარჩიეთ ქვეყნები, UMD/ GLAD)",
    //             "zh": "（每周，30m，热带地区，UMD/ GLAD）",
    //             "id": "(mingguan, 30m, tropis. UMD/GLAD)",
    //             "pt": "(semanal, 30m, trópicos, UMD/ GLAD)",
    //             "es": "(semanal, 30m, trópicos, UMD/ GLAD)",
    //             "fr": "(hebdomadaire, 30m, tropiques, UMD/ GLAD)",
    //             "en": "(every 6-12 days, 10m, select countries, WUR)"
    //         },
    //         "label": {
    //             "ka": "RADD Alerts",
    //             "zh": "RADD Alerts",
    //             "id": "RADD Alerts",
    //             "pt": "RADD Alerts",
    //             "es": "RADD Alerts",
    //             "fr": "RADD Alerts",
    //             "en": "RADD Alerts"
    //         },
    //         "confidence": [
    //             0,
    //             1
    //         ],
    //         "maxDateValue": 999999,
    //         "minDateValue": 15000,
    //         "technicalName": "wur_radd_alerts",
    //         "url": "https://tiles.globalforestwatch.org/wur_radd_alerts/latest/default/{z}/{x}/{y}.png",
    //         "type": "glad",
    //         "id": "RADD_ALERTS"
    //     },
    //     "isMetadataError": false,
    //     "isError": false
    // },
    // {
    //     "order": 11,
    //     "layerGroupId": "GROUP_LCD",
    //     "dataLayer": {
    //         "id": "INPE_CERRADO_PRODES",
    //         "order": 11,
    //         "type": "remoteDataLayer",
    //         "uuid": "a2d9e60f-b4f6-4e56-8100-00fb3da2cf8e",
    //         "groupId": "GROUP_LCD"
    //     },
    //     "layer": {
    //         "sublabel": {
    //             "ka": "annual, 6.25ha, Legal Amazon / Cerrado, INPE",
    //             "zh": "每年, 6.25ha, Legal Amazon / Cerrado, INPE",
    //             "id": "tahunan, 6.25ha, Legal Amazon / Cerrado, INPE",
    //             "pt": "წლიური, 6.25ha, Legal Amazon / Cerrado, INPE",
    //             "es": "anual, 6.25ha, Legal Amazon / Cerrado, INPE",
    //             "fr": "annuelle, 6.25ha, Legal Amazon / Cerrado, INPE",
    //             "en": "annual, 6.25ha, Legal Amazon / Cerrado, INPE"
    //         },
    //         "label": {
    //             "ka": "PRODES ტყის გაჩეხვის",
    //             "zh": "PRODES 滥伐",
    //             "id": "PRODES Deforestasi",
    //             "pt": "PRODES Desmatamento",
    //             "es": "PRODES Deforestación",
    //             "fr": "PRODES Déforestation",
    //             "en": "PRODES Deforestation"
    //         },
    //         "technicalName": "inpe_cerrado_prodes",
    //         "url": "https://tiles.globalforestwatch.org/inpe_cerrado_prodes/v2021/default/root.json",
    //         "type": "Vector.Layer",
    //         "id": "INPE_CERRADO_PRODES",
    //         "metadata": {
    //             "metadata": {
    //                 "function": "<p>Deforestation monitoring system for the Brazilian Legal Amazon, used by the Brazilian government to establish public policy</p>",
    //                 "geographic_coverage": "<p>Brazilian Legal Amazon</p>",
    //                 "download_data": "",
    //                 "map_service": "",
    //                 "subtitle": "annual, 6.25ha, Legal Amazon, INPE",
    //                 "license": "<p><a href=\"https://creativecommons.org/licenses/by-sa/3.0/deed.en\">Creative Commons BY SA 3.0</a></p>",
    //                 "title": "PRODES (Legal Amazon)",
    //                 "agol_id": "",
    //                 "overview": "<p>The PRODES project monitors clear cut deforestation in the Brazilian Amazon and Cerrado biomes, and has produced annual deforestation rates for the region since 1988. The Brazilian government uses these figures to establish public policy, including defining access to credit in the Amazon biome, establishing deforestation reduction goals, and soliciting funds to reduce deforestation. PRODES historically used Landsat 5 images, but now also incorporates imagery from Landsat 7 and 8, CBERS-2, CBERS-2B, Resourcesat-1, and UK2-DMC. PRODES is operated by the National Institute of Space Research (INPE) in collaboration with the Ministry of the Environment (MMA) and the Brazilian Institute of Environment and Renewable Natural Resources (IBAMA). Since 2002, all PRODES data is publicly available online. Input images for each of the 220 Landsat footprints that cover the Brazilian Amazon and Cerrado are selected based on their lack of cloud cover and their capture date. The PRODES system uses the seasonal year, starting on August 1st, to calculate annual deforestation, so images are selected as near to this date as possible (generally from July, August, and September). From 2003 to 2005, analysts used image transformation to determine the components of vegetation, soil, and shadow using the program SPRING. These components were segmented and classified into the classes of forest, non-forest, deforestation in the target year, previous deforestation, clouds, and water, which are then manually corrected by experts. Starting in 2005, a new methodology was implemented which makes use of the open source TerraAmazon platform. The platform allows the PRODES analysis to be more uniform and can incorporate imagery from a variety of satellites. As before, images are selected to be as cloud free as possible. The images are then masked to exclude non-forest, previous deforestation, and water using the previous year's analysis. Analysts then delineate deforested polygons in the intact forest of the previous year. This data set shows annual deforestation in 2008-2020 in the Nrazilian Legal Amazon.</p>",
    //                 "citation": "<p>National Institute of Space Research (INPE). 'PRODES deforestation.' Accessed through Global Forest Watch on [date]. www.globalforestwatch.org</p>",
    //                 "cautions": "<p>PRODES only identifies forest clearings of 6.25 hectares or larger, so forest degradation or smaller clearings from fire or selective logging are not detected. Frequent cloud cover over areas of the areas of coverage may change the reported year of deforestation. The year reported is the first year deforestation is identified by analysts, but this does not necessarily correspond to the year of deforestation if the landscape has been covered by clouds in previous years.</p>",
    //                 "date_of_content": "<p>2008-2021</p>",
    //                 "learn_more": "",
    //                 "source": "<p><a href=\"http://www.obt.inpe.br/OBT/assuntos/programas/amazonia/prodes\">INPE</a></p>",
    //                 "carto_table": "",
    //                 "amazon_link": "",
    //                 "translation": {
    //                     "fr": {},
    //                     "es": {}
    //                 },
    //                 "other": "",
    //                 "resolution": "<p>6.25ha</p>",
    //                 "frequency_of_updates": "<p>Annually</p>",
    //                 "tags": "Forest Change"
    //             },
    //             "legendConfig": {
    //                 "items": [
    //                     {
    //                         "name": {
    //                             "en": "PRODES Deforestation",
    //                             "fr": "PRODES Déforestation",
    //                             "es": "PRODES Deforestación",
    //                             "pt": "PRODES Desmatamento",
    //                             "id": "PRODES Deforestasi",
    //                             "zh": "PRODES 滥伐",
    //                             "ka": "PRODES ტყის გაჩეხვის"
    //                         },
    //                         "color": "#C92A6D",
    //                         "outlineColor": "#C92A6D"
    //                     }
    //                 ],
    //                 "source": "",
    //                 "notes": [
    //                     ""
    //                 ],
    //                 "name": {
    //                     "en": "PRODES Deforestation",
    //                     "fr": "PRODES Déforestation",
    //                     "es": "PRODES Deforestación",
    //                     "pt": "PRODES Desmatamento",
    //                     "id": "PRODES Deforestasi",
    //                     "zh": "PRODES 滥伐",
    //                     "ka": "PRODES ტყის გაჩეხვის"
    //                 },
    //                 "type": "basic"
    //             },
    //             "interactionConfig": {}
    //         },
    //         "style": "https://tiles.globalforestwatch.org/inpe_cerrado_prodes/v2021/default/root.json"
    //     },
    //     "isMetadataError": false,
    //     "isError": false
    // },
    // {
    //     "order": 12,
    //     "layerGroupId": "GROUP_LCD",
    //     "dataLayer": {
    //         "id": "INPE_AMAZON_PRODES",
    //         "order": 12,
    //         "type": "remoteDataLayer",
    //         "uuid": "ac72942c-d508-4929-b5fb-104e5c948d09",
    //         "groupId": "GROUP_LCD"
    //     },
    //     "layer": {
    //         "sublabel": {
    //             "ka": "annual, 6.25ha, Legal Amazon / Cerrado, INPE",
    //             "zh": "每年, 6.25ha, Legal Amazon / Cerrado, INPE",
    //             "id": "tahunan, 6.25ha, Legal Amazon / Cerrado, INPE",
    //             "pt": "წლიური, 6.25ha, Legal Amazon / Cerrado, INPE",
    //             "es": "anual, 6.25ha, Legal Amazon / Cerrado, INPE",
    //             "fr": "annuelle, 6.25ha, Legal Amazon / Cerrado, INPE",
    //             "en": "annual, 6.25ha, Legal Amazon / Cerrado, INPE"
    //         },
    //         "label": {
    //             "ka": "PRODES Amazon Biome",
    //             "zh": "PRODES Amazon Biome",
    //             "id": "PRODES Amazon Biome",
    //             "pt": "PRODES Amazon Biome",
    //             "es": "PRODES Amazon Biome",
    //             "fr": "PRODES Amazon Biome",
    //             "en": "PRODES Amazon Biome"
    //         },
    //         "technicalName": "inpe_amazon_prodes",
    //         "url": "https://tiles.globalforestwatch.org/inpe_amazon_prodes/latest/default/root.json",
    //         "type": "Vector.Layer",
    //         "id": "INPE_AMAZON_PRODES",
    //         "metadata": {
    //             "metadata": {
    //                 "function": "<p>Deforestation monitoring system for the Brazilian Legal Amazon, used by the Brazilian government to establish public policy</p>",
    //                 "geographic_coverage": "<p>Brazilian Legal Amazon</p>",
    //                 "download_data": "",
    //                 "map_service": "",
    //                 "subtitle": "annual, 6.25ha, Legal Amazon, INPE",
    //                 "license": "<p><a href=\"https://creativecommons.org/licenses/by-sa/3.0/deed.en\">Creative Commons BY SA 3.0</a></p>",
    //                 "title": "PRODES (Legal Amazon)",
    //                 "agol_id": "",
    //                 "overview": "<p>The PRODES project monitors clear cut deforestation in the Brazilian Amazon and Cerrado biomes, and has produced annual deforestation rates for the region since 1988. The Brazilian government uses these figures to establish public policy, including defining access to credit in the Amazon biome, establishing deforestation reduction goals, and soliciting funds to reduce deforestation. PRODES historically used Landsat 5 images, but now also incorporates imagery from Landsat 7 and 8, CBERS-2, CBERS-2B, Resourcesat-1, and UK2-DMC. PRODES is operated by the National Institute of Space Research (INPE) in collaboration with the Ministry of the Environment (MMA) and the Brazilian Institute of Environment and Renewable Natural Resources (IBAMA). Since 2002, all PRODES data is publicly available online. Input images for each of the 220 Landsat footprints that cover the Brazilian Amazon and Cerrado are selected based on their lack of cloud cover and their capture date. The PRODES system uses the seasonal year, starting on August 1st, to calculate annual deforestation, so images are selected as near to this date as possible (generally from July, August, and September). From 2003 to 2005, analysts used image transformation to determine the components of vegetation, soil, and shadow using the program SPRING. These components were segmented and classified into the classes of forest, non-forest, deforestation in the target year, previous deforestation, clouds, and water, which are then manually corrected by experts. Starting in 2005, a new methodology was implemented which makes use of the open source TerraAmazon platform. The platform allows the PRODES analysis to be more uniform and can incorporate imagery from a variety of satellites. As before, images are selected to be as cloud free as possible. The images are then masked to exclude non-forest, previous deforestation, and water using the previous year's analysis. Analysts then delineate deforested polygons in the intact forest of the previous year. This data set shows annual deforestation in 2008-2020 in the Nrazilian Legal Amazon.</p>",
    //                 "citation": "<p>National Institute of Space Research (INPE). 'PRODES deforestation.' Accessed through Global Forest Watch on [date]. www.globalforestwatch.org</p>",
    //                 "cautions": "<p>PRODES only identifies forest clearings of 6.25 hectares or larger, so forest degradation or smaller clearings from fire or selective logging are not detected. Frequent cloud cover over areas of the areas of coverage may change the reported year of deforestation. The year reported is the first year deforestation is identified by analysts, but this does not necessarily correspond to the year of deforestation if the landscape has been covered by clouds in previous years.</p>",
    //                 "date_of_content": "<p>2008-2021</p>",
    //                 "learn_more": "",
    //                 "source": "<p><a href=\"http://www.obt.inpe.br/OBT/assuntos/programas/amazonia/prodes\">INPE</a></p>",
    //                 "carto_table": "",
    //                 "amazon_link": "",
    //                 "translation": {
    //                     "fr": {},
    //                     "es": {}
    //                 },
    //                 "other": "",
    //                 "resolution": "<p>6.25ha</p>",
    //                 "frequency_of_updates": "<p>Annually</p>",
    //                 "tags": "Forest Change"
    //             },
    //             "legendConfig": {
    //                 "items": [
    //                     {
    //                         "name": {
    //                             "en": "PRODES Deforestation",
    //                             "fr": "PRODES Déforestation",
    //                             "es": "PRODES Deforestación",
    //                             "pt": "PRODES Desmatamento",
    //                             "id": "PRODES Deforestasi",
    //                             "zh": "PRODES 滥伐",
    //                             "ka": "PRODES ტყის გაჩეხვის"
    //                         },
    //                         "color": "#C92A6D",
    //                         "outlineColor": "#C92A6D"
    //                     }
    //                 ],
    //                 "source": "",
    //                 "notes": [
    //                     ""
    //                 ],
    //                 "name": {
    //                     "en": "PRODES Deforestation",
    //                     "fr": "PRODES Déforestation",
    //                     "es": "PRODES Deforestación",
    //                     "pt": "PRODES Desmatamento",
    //                     "id": "PRODES Deforestasi",
    //                     "zh": "PRODES 滥伐",
    //                     "ka": "PRODES ტყის გაჩეხვის"
    //                 },
    //                 "type": "basic"
    //             },
    //             "interactionConfig": {}
    //         },
    //         "style": "https://tiles.globalforestwatch.org/inpe_amazon_prodes/latest/default/root.json"
    //     },
    //     "isMetadataError": false,
    //     "isError": false
    // },
    {
        "order": 1,
        "layerGroupId": "GROUP_LC",
        "dataLayer": {
            "id": "IFL",
            "order": 1,
            "type": "remoteDataLayer",
            "uuid": "5f815a7d-457e-4eae-a8e5-8864a60696ad",
            "groupId": "GROUP_LC"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "function": "<p>Identifies the world’s last remaining unfragmented forest landscapes, large enough to retain all native biodiversity and showing no signs of human alteration as of the year 2020. This layer also shows the reduction in the extent of Intact Forest Landscapes from 2000 to 2020.</p>",
                    "geographic_coverage": "<p>Global</p>",
                    "download_data": "https://data.globalforestwatch.org/documents/gfw::intact-forest-landscapes/about",
                    "map_service": "",
                    "subtitle": "(2000/2013/2016/2020)",
                    "license": "<p><a href=\"https://creativecommons.org/licenses/by/4.0/\">CC BY 4.0</a></p>",
                    "title": "Intact Forest Landscapes",
                    "agol_id": "5a811508e1ab4ddbb79f7f0753d7d2d7",
                    "overview": "<p>The <a href=\"http://intactforests.org/\">Intact Forest Landscapes</a> (IFL) data set identifies unbroken expanses of natural ecosystems within the zone of forest extent that show no signs of significant human activity and are large enough that all native biodiversity, including viable populations of wide-ranging species, could be maintained. To map IFL areas, a set of criteria was developed and designed to be globally applicable and easily replicable, the latter to allow for repeated assessments over time as well as verification. IFL areas were defined as unfragmented landscapes, at least 50,000 hectares in size, and with a minimum width of 10 kilometers. These were then mapped from Landsat satellite imagery for the year 2000.</p><p>Changes in the extent of IFLs were identified within year 2000 IFL boundary using the global wall-to-wall Landsat image composite for year 2016 and the global forest cover loss dataset (Hansen et al., 2016). Areas identified as “reduction in extent” met the IFL criteria in 2000, but no longer met the criteria in 2020. The main causes of change were clearing for agriculture and tree plantations, industrial activity such as logging and mining, fragmentation due to infrastructure and new roads, and fires assumed to be caused by humans.</p><p>This data can be used to assess forest intactness, alteration, and degradation at global and regional scales.</p>",
                    "citation": "<p>Greenpeace, University of Maryland, World Resources Institute and Transparent World. “Intact Forest Landscapes. 2000/2013/2016/2020” Accessed through Global Forest Watch on [date]. www.globalforestwatch.org</p>",
                    "cautions": "<p>The world IFL map was created through visual interpretation of Landsat images by experts. The map may contain inaccuracies due to limitations in the spatial resolution of the imagery and lack of ancillary information about local land-use practices in some regions. In addition, the methodology assumes that fires in proximity to roads or other infrastructure may have been caused by humans, and therefore constitute a form of anthropogenic disturbance. This assumption could result in an underestimation of IFL extent in the boreal biome. </p>",
                    "date_of_content": "<p>2020</p>",
                    "learn_more": "http://www.intactforests.org/",
                    "source": "<p>Potapov, P., M. C. Hansen, L. Laestadius, S. Turubanova, A. Yaroshenko, C. Thies, W. Smith, I. Zhuravleva, A. Komarova, S. Minnemeyer, and E. Esipova. 2017. \"The last frontiers of wilderness: Tracking loss of intact forest landscapes from 2000 to 2013.\" Science Advances 3: e1600821.</p>",
                    "carto_table": "<p>https://wri-01.carto.com/tables/intact_forest_landscapes</p>",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>Approximately 1:1,000,000</p>",
                    "frequency_of_updates": "",
                    "tags": "Land Cover"
                },
                "legendConfig": {
                    "source": "(2000/2013/2016)",
                    "type": "basic",
                    "name": {
                        "en": "Intact Forest Landscape",
                        "fr": "Paysage de la forêt vierge",
                        "es": "Paisaje forestal intacto",
                        "pt": "Paisagens Florestais Intactas",
                        "id": "Lanskap Hutan Utuh",
                        "zh": "原生森林景观",
                        "ka": "ხელუხლებელი ტყის ლანდშაფტი"
                    },
                    "items": [
                        {
                            "name": {
                                "en": "Intact Forest Landscape",
                                "fr": "Paysage de la forêt vierge",
                                "es": "Paisaje forestal intacto",
                                "pt": "Paisagem florestal intacta",
                                "id": "Lanskap Hutan Utuh",
                                "zh": "原生森林景观",
                                "ka": "ხელუხლებელი ტყის ლანდშაფტი"
                            },
                            "color": "#136400"
                        },
                        {
                            "name": {
                                "en": "Reduction in extent 2000-2013",
                                "fr": "Diminution de l’étendue 2000 - 2013",
                                "es": "Reducción en la extensión 2000 a 2013",
                                "pt": "Redução em extensão 2000 – 2013",
                                "id": "Pengurangan Luasan pada 2000 - 2013",
                                "zh": "2000 - 2013 年减少程度",
                                "ka": "სიდიდის შემცირება 2000-2013"
                            },
                            "color": "#969904"
                        },
                        {
                            "name": {
                                "en": "Reduction in extent 2013-2016",
                                "fr": "Diminution de l’étendue 2013 - 2016",
                                "es": "Reducción en la extensión 2013 a 2016",
                                "pt": "Redução em extensão 2013 – 2016",
                                "id": "Pengurangan Luasan pada 2013 - 2016",
                                "zh": "2013 - 2016 年减少程度",
                                "ka": "სიდიდის შემცირება 2013-2016"
                            },
                            "color": "#635731"
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "id": "IFL",
            "type": "Vector.Layer",
            "url": "https://tiles.globalforestwatch.org/ifl_intact_forest_landscapes/v2018/default/root.json",
            "layerIds": [
                16
            ],
            "technicalName": "intact_forest_landscapes_change",
            "label": {
                "en": "Intact Forest Landscape",
                "fr": "Paysage de la forêt vierge",
                "es": "Paisaje forestal intacto",
                "pt": "Paisagem florestal intacta",
                "id": "Intact Forest Landscape",
                "zh": "原生林景观",
                "ka": "ხელუხლებელი ტყის ლანდშაფტი"
            },
            "sublabel": {
                "en": "(2000/2013/2016, global, UMD/WRI/Greenpeace/Transparent World)",
                "fr": "(2000/2013/2016, mondial, UMD/WRI/Greenpeace/Transparent World)",
                "es": "(2000/2013/2016, global, UMD/WRI/Greenpeace/Transparent World)",
                "pt": "(2000/2013/2016, global, UMD/WRI/Greenpeace/Transparent World)",
                "id": "(2000/2013/2016, global, UMD/WRI/Greenpeace/Transparent World)",
                "zh": "(2000/2013/2016 年，全球，UMD/WRI/Greenpeace/Transparent World）",
                "ka": "(2000/2013/2016, გლობალური, UMD/WRI/Greenpeace/Transparent World)"
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 2,
        "layerGroupId": "GROUP_LC",
        "dataLayer": {
            "id": "PRIMARY_FORESTS",
            "order": 2,
            "type": "remoteDataLayer",
            "uuid": "edffb745-e523-462d-ad1e-3052006a3dbc",
            "groupId": "GROUP_LC"
        },
        "layer": {
            "label": {
                "ka": "პირველყოფილი ტყეები",
                "zh": "原始森林",
                "id": "Hutan Primer",
                "pt": "Florestas primárias",
                "es": "Bosques Primarios",
                "fr": "Forêt primaire",
                "en": "Primary Forests"
            },
            "sublabel": {
                "ka": "(2001, ტროპიკები, UMD)",
                "zh": "（2001 年，热带地区，UMD）",
                "id": "(2001, negara terpilih, UMD)",
                "pt": "(2001, trópicos, UMD)",
                "es": "(2001, tropis, UMD)",
                "fr": "(2001, tropiques, UMD)",
                "en": "(2001, tropics, UMD)"
            },
            "technicalName": "regional_primary_forests",
            "url": "https://api.resourcewatch.org/v1/layer/41086554-5ca5-456c-80dd-f6bee61bc45f/tile/gee/{z}/{x}/{y}",
            "type": "primed",
            "id": "PRIMARY_FORESTS",
            "metadata": {
                "metadata": {
                    "function": "<p>This data set maps the extent of primary forests in the global pan-tropical regions in 2001.</p>",
                    "geographic_coverage": "<p>Pan-Tropical</p>",
                    "download_data": "https://glad.umd.edu/dataset/primary-forest-humid-tropics",
                    "map_service": "",
                    "subtitle": "30m, tropics, UMD/GLAD",
                    "license": "",
                    "title": "Primary Forests",
                    "agol_id": "",
                    "overview": "<p>Primary forests are among the most biodiverse forests, providing a multitude of ecosystem services, making them crucial to monitor for national land use planning and carbon accounting. This data set defines primary forests as \"mature natural humid tropical forest cover that has not been completely cleared and regrown in recent history.\" Researchers classified Landsat images into primary forest data, using a separate algorithm for each region.</p>",
                    "citation": "<p>Turubanova, S., Potapov, P.V., Tyukavina, A. and Hansen, M.C., 2018. Ongoing primary forest loss in Brazil, Democratic Republic of the Congo, and Indonesia. Environmental Research Letters, 13(7), p.074028. Accessed through Global Forest Watch on [date]. www.globalforestwatch.org.</p>",
                    "cautions": "",
                    "date_of_content": "<p>2001</p>",
                    "learn_more": "https://glad.umd.edu/dataset/primary-forest-humid-tropics",
                    "source": "<p>Turubanova, S., Potapov, P.V., Tyukavina, A. and Hansen, M.C., 2018. <a href=\"http://iopscience.iop.org/article/10.1088/1748-9326/aacd1c/meta\">Ongoing primary forest loss in Brazil, Democratic Republic of the Congo, and Indonesia</a>. Environmental Research Letters, 13(7), p.074028.</p>",
                    "carto_table": "",
                    "amazon_link": "http://gfw2-data.s3.amazonaws.com/forest_cover/primary_forest/",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>30 × 30 meters</p>",
                    "frequency_of_updates": "",
                    "tags": "Land Cover, Country data"
                },
                "legendConfig": {
                    "type": "basic",
                    "name": {
                        "ka": "პირველყოფილი ტყეები",
                        "zh": "原始森林",
                        "id": "Hutan Primer",
                        "pt": "Florestas primárias",
                        "es": "Bosques primarios",
                        "fr": "Forêt primaire",
                        "en": "Primary Forests"
                    },
                    "items": [
                        {
                            "color": "#658434",
                            "outlineColor": "#555555",
                            "name": {
                                "ka": "პირველყოფილი ტყეები",
                                "zh": "原始森林",
                                "id": "Hutan Primer",
                                "pt": "Florestas primárias",
                                "es": "Bosques primarios",
                                "fr": "Forêt primaire",
                                "en": "Primary Forests"
                            }
                        }
                    ]
                },
                "interactionConfig": {}
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 3,
        "layerGroupId": "GROUP_LC",
        "dataLayer": {
            "id": "AG_BIOMASS",
            "order": 3,
            "type": "remoteDataLayer",
            "uuid": "04526d47-f3f5-4f76-a939-e5f7861fd085",
            "groupId": "GROUP_LC"
        },
        "layer": {
            "id": "AG_BIOMASS",
            "metadata": {
                "metadata": {
                    "function": "<p>Shows carbon density values of aboveground live woody biomass</p>",
                    "geographic_coverage": "<p>Tropics (30 degrees N, 20 degrees S)</p>",
                    "download_data": "http://data.globalforestwatch.org/datasets/8f93a6f94a414f9588ce4657a39c59ff_1",
                    "map_service": "",
                    "subtitle": "Tropics, Zarin/WHRC",
                    "license": "<p>Creative Commons CC BY 4.0 </p>",
                    "title": "Tropical aboveground live woody biomass density",
                    "agol_id": "",
                    "overview": "<p>This is a higher resolution data product that expands upon the methodology presented in Baccini et al. (2012) to generate a pan-tropical map of aboveground live woody biomass density at 30 m resolution for circa the year 2000. Along with the carbon density values, there is an error map at the same spatial resolution providing the uncertainty in aboveground carbon density estimation. These maps allow for the co-location of biomass estimates with Hansen et al. (2013, v1.0) tree cover loss estimates at similar spatial resolution. The statistical relationship derived between ground-based measurements of forest biomass density and co-located Geoscience Laser Altimeter System (GLAS) LiDAR waveform metrics as described by Baccini et al. (2012) were used to estimate the biomass density of more than 40,000 GLAS footprints throughout the tropics. Then, using randomForest models, the GLAS-derived estimates of biomass density were correlated to continuous, gridded variables including Landsat 7 ETM+ satellite imagery and products (e.g., reflectance), elevation, and biophysical variables. By using continuous gridded datasets as inputs to the randomForest models, a wall-to-wall 30 m resolution map of aboveground woody biomass density across the tropics was produced as well as the associated uncertainty layer. The uncertainty layer takes into account the errors from allometric equations, LiDAR based model, and randomForest model. All the errors are propagated to the final biomass estimate. A detailed description of the work will be reported in a new paper under preparation. </p>",
                    "citation": "<p>Baccini A., W. Walker, L. Carvahlo, M. Farina, D. Sulla-Menashe, R. Houghton (2015). Tropical forests are a net carbon source based on new measurements of gain and loss. In review. Accessed through Global Forest Watch Climate on [date]. climate.globalforestwatch.org. </p>",
                    "cautions": "<p>It is recommended that both aboveground carbon density and uncertainty values be used together for carbon assessments and verification. The map will provide accurate estimates of aboveground carbon stock and aboveground carbon density when aggregated to large areas (5,000 to 10,000 ha) for project and regional level assessments. The biomass density value of a single pixel may have large uncertainty when compared with small plots for verification.</p>",
                    "date_of_content": "<p>2000</p>",
                    "learn_more": "",
                    "source": "<p>ICEsat GLAS lidar, MODIS, Landsat, ground measurements</p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>30 m</p>",
                    "frequency_of_updates": "<p>NA</p>",
                    "tags": "Biomass density"
                },
                "legendConfig": {
                    "type": "gradient",
                    "name": {
                        "en": "Aboveground Live Woody Biomass Density",
                        "fr": "Densité de la biomasse ligneuse vivante aérienne",
                        "es": "Densidad de la biomasa leñosa viva en superficie",
                        "pt": "Densidade de vegetal lenhoso vivo acima do solo",
                        "id": "Kerapatan biomassa vegetasi berkayu di atas permukaan tanah",
                        "zh": "地上活木生物量质密度",
                        "ka": "მიწისზედა ცოცხალი ტყის ბიომასის სიხშირე"
                    },
                    "items": [
                        {
                            "name": {
                                "zh": "500 Mg Ha -1",
                                "pt": "500 Mg Ha -1",
                                "ka": "500 Mg Ha -1",
                                "id": "500 Mg Ha -1",
                                "fr": "500 Mg Ha -1",
                                "es": "500 Mg Ha -1",
                                "en": "500 Mg Ha -1"
                            },
                            "color": "#306466"
                        },
                        {
                            "name": {
                                "zh": "250 Mg Ha -1",
                                "pt": "250 Mg Ha -1",
                                "ka": "250 Mg Ha -1",
                                "id": "250 Mg Ha -1",
                                "fr": "250 Mg Ha -1",
                                "es": "250 Mg Ha -1",
                                "en": "250 Mg Ha -1"
                            },
                            "color": "#cccc66"
                        },
                        {
                            "name": {
                                "zh": "0",
                                "pt": "0",
                                "ka": "0",
                                "id": "0",
                                "fr": "0",
                                "es": "0",
                                "en": "0"
                            },
                            "color": "#6e462d"
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "type": "image",
            "url": "https://gis-gfw.wri.org/arcgis/rest/services/image_services/whrc_carbon_tcd/ImageServer",
            "technicalName": "aboveground_biomass",
            "label": {
                "en": "Aboveground Live Woody Biomass Density",
                "fr": "Densité de la biomasse ligneuse vivante aérienne",
                "es": "Densidad de la biomasa leñosa viva en superficie",
                "pt": "Densidade de biomassa viva acima do solo",
                "id": "Kerapatan biomassa vegetasi berkayu di atas permukaan tanah",
                "zh": "地上活木生物量质密度",
                "ka": "მიწისზედა ცოცხალი ტყის ბიომასის სიხშირე"
            },
            "sublabel": {
                "en": "(30m, tropics, Zarin/WHRC)",
                "fr": "(30 m, tropiques, Zarin/WHRC)",
                "es": "(30 m, trópicos, Zarin/WHRC)",
                "pt": "(30 m, trópicos, Zarin/WHRC)",
                "id": "(30m, tropis, Zarin/WHRC)",
                "zh": "(30m，热带地区，Zarin/WHRC）",
                "ka": "(30 მ, ტროპიკები, Zarin/WHRC)"
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 4,
        "layerGroupId": "GROUP_LC",
        "dataLayer": {
            "id": "TREE_COVER",
            "order": 4,
            "type": "remoteDataLayer",
            "uuid": "2569adca-ef87-42c4-a153-57c5e8ba0ef7",
            "groupId": "GROUP_LC"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "function": "<p>Identifies areas of tree cover</p>",
                    "geographic_coverage": "<p>Global land (excluding Antarctica and Arctic islands)</p>",
                    "download_data": "https://glad.umd.edu/dataset/global-2010-tree-cover-30-m",
                    "map_service": "http://50.18.182.188:6080/arcgis/rest/services/TreeCover2000/ImageServer",
                    "subtitle": "(2000/2010, Hansen/UMD/Google/USGS/NASA)",
                    "license": "<p><a href=\"http://creativecommons.org/licenses/by/4.0/\">CC BY 4.0</a></p>",
                    "title": "Tree cover",
                    "agol_id": "7876b225f8034a0ebba79fad4afb80ad,5fb3275e080e497fa44174d2b14d4b7c",
                    "overview": "<p>This data set, a collaboration between the <a href=\"http://glad.geog.umd.edu/\">GLAD</a> (Global Land Analysis &amp; Discovery) lab at the University of Maryland, Google, USGS, and NASA, displays tree cover over all global land (except for Antarctica and a number of Arctic islands) for the years 2000 and 2010 at 30 × 30 meter resolution. “Percent tree cover” is defined as the density of tree canopy coverage of the land surface and is color-coded by density bracket (see legend).</p><p>Data in this layer were generated using multispectral satellite imagery from the <a href=\"http://landsat.usgs.gov/\">Landsat 7</a> thematic mapper plus (ETM+) sensor. The clear surface observations from over 600,000 images were analyzed using Google Earth Engine, a cloud platform for earth observation and data analysis, to determine per pixel tree cover using a supervised learning algorithm.</p><p>The tree cover canopy density of the displayed data varies according to the selection - use the legend on the map to change the minimum tree cover canopy density threshold.</p>",
                    "citation": "<p>Use the following credit when these data are displayed:<br>Source: Hansen/UMD/Google/USGS/NASA, accessed through Global Forest Watch</p><p>Use the following credit when these data are cited:<br>Hansen, M. C., P. V. Potapov, R. Moore, M. Hancher, S. A. Turubanova, A. Tyukavina, D. Thau, S. V. Stehman, S. J. Goetz, T. R. Loveland, A. Kommareddy, A. Egorov, L. Chini, C. O. Justice, and J. R. G. Townshend. 2013. “High-Resolution Global Maps of 21st-Century Forest Cover Change.” Science 342 (15 November): 850–53. Data available on-line from:https://glad.umd.edu/dataset/global-2010-tree-cover-30-m. Accessed through Global Forest Watch on [date]. www.globalforestwatch.org </p>",
                    "cautions": "<p>For the purpose of this study, “tree cover” was defined as all vegetation taller than 5 meters in height. “Tree cover” is the biophysical presence of trees and may take the form of natural forests or plantations existing over a range of canopy densities.</p>",
                    "date_of_content": "<p>2000 &amp; 2010</p>",
                    "learn_more": "http://science.sciencemag.org/content/342/6160/850",
                    "source": "<p>Hansen, M. C., P. V. Potapov, R. Moore, M. Hancher, S. A. Turubanova, A. Tyukavina, D. Thau, S. V. Stehman, S. J. Goetz, T. R. Loveland, A. Kommareddy, A. Egorov, L. Chini, C. O. Justice, and J. R. G. Townshend. 2013. “High-Resolution Global Maps of 21st-Century Forest Cover Change.” Science 342 (15 November): 850–53. Data available from: <a href=\"https://glad.umd.edu/dataset/global-2010-tree-cover-30-m\">https://glad.umd.edu/dataset/global-2010-tree-cover-30-m</a>.</p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>30 × 30 meters</p>",
                    "frequency_of_updates": "",
                    "tags": "Land Cover"
                },
                "legendConfig": {
                    "name": {
                        "en": "Tree cover",
                        "fr": "Couvert arboré",
                        "es": "cobertura arbórea",
                        "pt": "cobertura arbórea",
                        "id": "Tutupan Pohon",
                        "zh": "森林覆盖",
                        "ka": "ტყის საფარი"
                    },
                    "type": "basic",
                    "items": [
                        {
                            "outlineColor": "#555555",
                            "color": "#2DBC27",
                            "name": {
                                "en": "Tree cover",
                                "fr": "Couvert arboré",
                                "es": "cobertura arbórea",
                                "pt": "cobertura arbórea",
                                "id": "Tutupan Pohon",
                                "zh": "森林覆盖",
                                "ka": "ტყის საფარი"
                            }
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "id": "TREE_COVER",
            "type": "tree-cover",
            "url": " https://earthengine.google.org/static/hansen_2014/gfw_loss_tree_year_{thresh}_2014/{z}/{x}/{y}.png",
            "technicalName": "tree_cover",
            "opacity": 0.8,
            "label": {
                "en": "Tree cover",
                "fr": "Couvert arboré",
                "es": "Cobertura arbórea",
                "pt": "cobertura arbórea",
                "id": "Tutupan Pohon",
                "zh": "森林覆盖",
                "ka": "ტყის საფარი"
            },
            "sublabel": {
                "en": "(2000, 30m global, Hansen/UMD/Google/USGS/NASA)",
                "fr": "(2000, 30 m, mondiale, Hansen/UMD/Google/USGS/NASA)",
                "es": "(2000, 30 m, global, Hansen/UMD/Google/USGS/NASA)",
                "pt": "(2000, 30 m global, Hansen/UMD/Google/USGS/NASA)",
                "id": "(2000, 30m global, Hansen/UMD/Google/USGS/NASA)",
                "zh": "(2000年, 30米 全球覆盖, 汉森/马里兰大学/谷歌/美国地质测量局(USGS)/美国宇航局(NASA))",
                "ka": "(2000 წ, 30მ გლობალური, Hansen/UMD/Google/USGS/NASA)"
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 5,
        "layerGroupId": "GROUP_LC",
        "dataLayer": {
            "id": "LAND_COVER",
            "order": 5,
            "type": "remoteDataLayer",
            "uuid": "b8d3f175-0565-443f-839a-49eb890a4b3d",
            "groupId": "GROUP_LC"
        },
        "layer": {
            "label": {
                "ka": "მიწის საფარი",
                "zh": "土地覆盖",
                "id": "Tutupan Lahan",
                "pt": "Cobertura da terra",
                "es": "Cobertura de la tierra",
                "fr": "Couverture terrestre",
                "en": "Land Cover"
            },
            "sublabel": {
                "ka": "(2015, გლობალური, globecover – ESA/ UCLouvain)  ",
                "zh": "（2015 年，全球，globecover – ESA/ UCLouvain）",
                "id": "(2015, global, globecover – ESA/UCLouvain)",
                "pt": "(2015, global, globecover – ESA/ UCLouvain)",
                "es": "(2015, global, globecover; ESA/UCLouvain)",
                "fr": "(2015, mondiale, globecover – ESA/ UCLouvain)",
                "en": "(2015, global, globecover – ESA/ UCLouvain)"
            },
            "technicalName": "global_landcover",
            "url": "https://s3.amazonaws.com/wri-tiles/global-landcover-2015/{level}/{col}/{row}.png",
            "type": "webtiled",
            "id": "LAND_COVER",
            "metadata": {
                "metadata": {
                    "function": "<p>Shows the global distribution of land cover in 2015</p>",
                    "geographic_coverage": "<p>Global</p>",
                    "download_data": "http://maps.elie.ucl.ac.be/CCI/viewer/download.php",
                    "map_service": "",
                    "subtitle": "(ESA/UCLouvain, 2015)",
                    "license": "<p><a href=\"http://maps.elie.ucl.ac.be/CCI/viewer/download.php\">Terms of Use</a></p>",
                    "title": "Land cover ",
                    "agol_id": "",
                    "overview": "<p>This data set (version 2.07) was created as part of the Climate Change Initiative (CCI), an initiative of the European Space Agency to create long-term, consistent, global data for the purposes of climate modelling. The CCI Land Cover project delivers consistent global land cover maps at 300 m spatial resolution on an annual basis from 1992 to 2015. The Global Forest Watch platform only displays the 2015 land cover data.</p><p>To ensure consistency from year to year, land cover maps for each year are derived from a single baseline land cover map. The baseline map was created using the full record of MERIS images from 2003 to 2012, using unsupervised classification as well as a machine learning algorithm over multiple years of imagery. Changes are then detected between individual years at 1 km resolution, using AVHRR data from 1992 to 1999, SPOT-VGT data from 1999 to 2013, and PROVA-V data from 2014 and 2015. Changes must be consistent for two consecutive years in order to be counted, with the exception of forest changes in 2014 and 2015 which are assumed to be well detected. The 1 km changes are then combined with the baseline land cover map and delineated to 300 meters for 2004 onward (when MERIS and PROVA-V data are available).</p><p>The resulting data have a total of 22 global land cover classes. For the sake of better visualization, Global Forest Watch shows only a set of simplified classes, based on the IPCC (agriculture, forest, grassland, wetland, settlement, shrubland, sparse vegetation, bare area, water, and permanent ice and snow). The full set of classes as well as annual land cover maps back to 1992 are available on the <a href=\"http://maps.elie.ucl.ac.be/CCI/viewer/\">ESA/CCI viewer</a>.</p>",
                    "citation": "<p>ESA Climate Change Initiative, Land Cover - led by UC Louvain. “2015 global land cover.” Land Cover CCI Product User Guide Version 2. Tech. Rep. (2017). Available at: <a href=\"maps.elie.ucl.ac.be/CCI/viewer/download/ESACCI-LC-Ph2-PUGv2_2.0.pdf\">maps.elie.ucl.ac.be/CCI/viewer/download/ESACCI-LC-Ph2-PUGv2_2.0.pdf</a>. Accessed through Global Forest Watch on [date]. www.globalforestwatch.org.</p>",
                    "cautions": "<p>A <a href=\"http://maps.elie.ucl.ac.be/CCI/viewer/download/ESACCI-LC-Ph2-PUGv2_2.0.pdf\">full accuracy assessment</a> is available from the CCI. In general, land cover classes such as rainfed and irrigated croplands, broadleaved evergreen forest, urban areas, bare areas, water bodies and permanent snow are found quite accurately mapped. On the other hand, classes such as lichens and mosses, sparse vegetation and flooded forest with fresh water can be affected by errors.</p><p>Data quality varies by region, particularly as related to the coverage of MERIS imagery for creation of the baseline map. Areas with less coverage include the western part of the Amazon basin, Chile and the southern part of Argentina, the western part of Congo basin as well as the gulf of Guinea, the eastern part of Russia, and the eastern coast of China and Indonesia.</p>",
                    "date_of_content": "<p>2015</p>",
                    "learn_more": "http://maps.elie.ucl.ac.be/CCI/viewer/download/ESACCI-LC-Ph2-PUGv2_2.0.pdf ",
                    "source": "<p>© ESA Climate Change Initiative - Land Cover led by UCLouvain (2017)</p>",
                    "carto_table": "",
                    "amazon_link": "http://gfw2-data.s3.amazonaws.com/forest_cover/zip/global_landcover_2015.tif ",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>300 × 300 meters</p>",
                    "frequency_of_updates": "<p>Annual</p>",
                    "tags": "Land Cover"
                },
                "legendConfig": {
                    "type": "basic",
                    "source": "(GlobCover, 2015)",
                    "name": {
                        "ka": "მიწის საფარი",
                        "zh": "土地覆盖",
                        "id": "Tutupan Lahan",
                        "pt": "Cobertura da terra",
                        "es": "Cobertura de la tierra",
                        "fr": "Couverture des sols",
                        "en": "Land Cover"
                    },
                    "items": [
                        {
                            "color": "#8b6726",
                            "name": {
                                "en": "Irrigated croplands",
                                "fr": "Terres cultivées irriguées",
                                "es": "Tierras de cultivo irrigadas",
                                "pt": "Terras agrícolas irrigadas",
                                "id": "Lahan pertanian irigasi",
                                "zh": "灌溉农田",
                                "ka": "მორწყვადი ს/ს კულტურები"
                            }
                        },
                        {
                            "color": "#d3b258",
                            "name": {
                                "en": "Rainfed croplands",
                                "fr": "Terres cultivées pluviales",
                                "es": "Tierras de cultivo sin riego",
                                "pt": "Terras agrícolas dependente de chuvas",
                                "id": "Lahan pertanian tadah hujan",
                                "zh": "旱作农田",
                                "ka": "წვიმით მორწყვადი კულტურები"
                            }
                        },
                        {
                            "color": "#d8ce88",
                            "name": {
                                "en": "Cropland forest mosaic",
                                "fr": "Mosaïque forêt/terres cultivées",
                                "es": "Mosaico de tierras agroforestales",
                                "pt": "Mosaico de floresta e terra agrícola",
                                "id": "Campuran lahan pertanian dan hutan",
                                "zh": "农田森林镶嵌体",
                                "ka": "ს/ს კულტურების და ტყის მოზაიკა"
                            }
                        },
                        {
                            "color": "#3d7e5a",
                            "name": {
                                "en": "Broadleaved evergreen or semi-deciduous forest",
                                "fr": "Forêt de feuillus à feuillage persistant ou semi-décidue",
                                "es": "Bosque perenne o semicaducifolio de hoja ancha",
                                "pt": "Floresta latifoliada (folha larga) perenifólia ou semidecidual",
                                "id": "Hutan vegetasi berdaun lebar sepanjang tahun atau hutan semi gugur berdaun lebar ",
                                "zh": "常绿阔叶或半落叶林",
                                "ka": "ფართოფოთლოვანი მარადმწვანე ან ნახევრად  ფოთოლმცვენი ტყე"
                            }
                        },
                        {
                            "color": "#cc8223",
                            "name": {
                                "en": "Broadleaved deciduous forest",
                                "fr": "Forêt de feuillus à feuilles caduques",
                                "es": "Bosque caducifolio de hoja ancha",
                                "pt": "Floresta latifoliada (folha larga) decidual",
                                "id": "Hutan gugur berdaun lebar",
                                "zh": "落叶阔叶林",
                                "ka": "ფართოფოთლოვანი ფოთოლმცვენი ტყე"
                            }
                        },
                        {
                            "color": "#86b689",
                            "name": {
                                "en": "Needleleaved evergreen or deciduous forest",
                                "fr": "Forêt de conifères persistants ou décidue",
                                "es": "Bosques de coníferas o caducifolios",
                                "pt": "Floresta aciculifoliada (folha fina) perenifólia ou decidual",
                                "id": "Hutan vegetasi berdaun jarum sepanjang tahun atau hutan gugur berdaun jarum",
                                "zh": "常绿针叶或落叶林",
                                "ka": "წიწვოვანი მარადმწვანე ან ფოთოლმცვენი ტყე"
                            }
                        },
                        {
                            "color": "#a2912b",
                            "name": {
                                "en": "Mixed broadleaved and needleleaved forest",
                                "fr": "Forêt mixte de feuillus et de conifères",
                                "es": "Bosque mixto de hoja ancha y coníferas",
                                "pt": "Floresta mista latifoliada (folha larga) e aciculifoliada (folha fina)",
                                "id": "Hutan campuran berdaun lebar dan berdaun jarum",
                                "zh": "针阔叶混交林",
                                "ka": "შერეული ფართოფოთლოვანი და წიწვოვანი ტყე"
                            }
                        },
                        {
                            "color": "#c9be15",
                            "name": {
                                "en": "Mosaic of forest, shrubland and grassland",
                                "fr": "Mosaïque de forêts, d'arbustaies et de prairies",
                                "es": "Mosaico de bosque, matorral y pastizal",
                                "pt": "Mosaico de floresta, vegetação arbustiva e campo",
                                "id": "Campuran tutupan hutan, semak belukar dan padang rumput",
                                "zh": "森林、灌木和草地镶嵌体",
                                "ka": "ტყის, ბუჩქნარის და მინდორის მოზაიკა"
                            }
                        },
                        {
                            "color": "#7b824b",
                            "name": {
                                "en": "Shrubland",
                                "fr": "Arbustaies",
                                "es": "Matorral",
                                "pt": "Vegetação arbustiva",
                                "id": "Semak belukar",
                                "zh": "灌木",
                                "ka": "ბუჩქნარი"
                            }
                        },
                        {
                            "color": "#a5ae63",
                            "name": {
                                "en": "Grassland",
                                "fr": "Prairies",
                                "es": "Pastizal",
                                "pt": "Campo",
                                "id": "Padang Rumput",
                                "zh": "草地",
                                "ka": "მინდორი"
                            }
                        },
                        {
                            "color": "#d4df82",
                            "name": {
                                "en": "Sparse vegetation",
                                "fr": "Végétation clairsemée",
                                "es": "Vegetación escasa",
                                "pt": "Vegetação esparsa",
                                "id": "Vegetasi jarang",
                                "zh": "稀疏植被",
                                "ka": "მეჩხერი მცენარეულობა"
                            }
                        },
                        {
                            "color": "#9abfda",
                            "name": {
                                "en": "Flooded broadleaved forest",
                                "fr": "Forêt de feuillus inondée",
                                "es": "Bosque de hoja ancha inundado",
                                "pt": "Floresta latifoliada (folha larga) inundada",
                                "id": "Hutan berdaun lebar terendam",
                                "zh": "被淹没的阔叶林",
                                "ka": "დატბორილი ფართოფოთლოვანი ტყე "
                            }
                        },
                        {
                            "color": "#3f6495",
                            "name": {
                                "en": "Flooded vegetation",
                                "fr": "Végétation inondée",
                                "es": "Vegetación inundada",
                                "pt": "Vegetação inundada",
                                "id": "Vegetasi terendam",
                                "zh": "被淹没的植被",
                                "ka": "დატბორილი მცენარეულობა"
                            }
                        },
                        {
                            "color": "#e70061",
                            "name": {
                                "en": "Artificial areas",
                                "fr": "Zones artificielles",
                                "es": "Áreas artificiales",
                                "pt": "Áreas artificiais",
                                "id": "Kawasan buatan",
                                "zh": "人造区域",
                                "ka": "სახეცვლილი (ხელოვნური) ადგილები"
                            }
                        },
                        {
                            "color": "#f6eedb",
                            "name": {
                                "en": "Bare areas",
                                "fr": "Zones nues",
                                "es": "Áreas sin vegetación",
                                "pt": "Solo expostos",
                                "id": "Kawasan terbuka",
                                "zh": "裸地",
                                "ka": "მოშიშვლებული ადგილები"
                            }
                        },
                        {
                            "color": "#e1ddce",
                            "name": {
                                "en": "Permanent snow and ice",
                                "fr": "Neige et glace permanentes",
                                "es": "Hielo y nieve permanentes",
                                "pt": "Neve e gelo permanentes",
                                "id": "Salju dan es permanen",
                                "zh": "长年冰雪",
                                "ka": "მუდმივი თოვლი და ყინული"
                            }
                        }
                    ]
                },
                "interactionConfig": {}
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 6,
        "layerGroupId": "GROUP_LC",
        "dataLayer": {
            "id": "UMD_LAND_COVER",
            "order": 6,
            "type": "remoteDataLayer",
            "uuid": "f22e0529-d398-4ccc-b943-e62d420fea89",
            "groupId": "GROUP_LC"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "function": "<p>Global land use and land cover map for 2000 and 2020</p>",
                    "geographic_coverage": "<p>Global</p>",
                    "download_data": "",
                    "map_service": "",
                    "subtitle": "",
                    "license": "<p>Creative Commons Attribution License (https://glad.umd.edu/dataset/GLCLUC2020)</p>",
                    "title": "Land Cover 2000-2020",
                    "agol_id": "",
                    "overview": "<p>The global land use and land cover maps were created by the Global Land Analysis and Discovery Lab (GLAD) laboratory, and the data is available at 30 m spatial resolution for 2000 and 2020. The GLAD laboratory used the spatiotemporally consistent <a href=\"https://glad.umd.edu/ard\">Landsat Analysis Ready Data (GLAD ARD)</a> to quantify changes in forest extent and height, cropland, built-up lands, surface water, and perennial snow and ice extent over the twenty year period. Each thematic product was independently derived using state-of-the-art, locally and regionally calibrated machine learning tools. The dataset was validated using a statistical sampling which confirms its high accuracy. The Global Land Analysis and Discovery Lab (GLAD) laboratory in the Department of Geographical Sciences at UMD investigates methods, causes, and impacts of global land surface change. Earth observation imagery is the primary data source, and the land cover extent and change is the primary topic of interest. GLAD aspires to generate new science insights concerning land resources, educate the next generation of remote sensing-based land change scientists, and disseminate land monitoring capabilities to operational settings nationally and internationally.</p>",
                    "citation": "<p>Potapov P., Hansen M.C., Pickens A., Hernandez-Serna A., Tyukavina A., Turubanova S., Zalles V., Li X., Khan A., Stolle F., Harris N., Song X.-P., Baggett A., Kommareddy I., Kommareddy A. (2022) The global 2000-2020 land cover and land use change dataset derived from the Landsat archive: first results. Frontiers in Remote Sensing. <a href=\"https://doi.org/10.3389/frsen.2022.856903\">https://doi.org/10.3389/frsen.2022.856903</a>. Accessed through Resource Watch, (date). <a href=\"https://www.resourcewatch.org\">www.resourcewatch.org</a>.</p>",
                    "cautions": "",
                    "date_of_content": "",
                    "learn_more": "",
                    "source": "<p>University of Maryland</p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>30</p>",
                    "frequency_of_updates": "",
                    "tags": ""
                },
                "legendConfig": {
                    "name": {
                        "en": "2000-2020 Land Cover Map",
                        "fr": "2000-2020 Land Cover Map",
                        "es": "2000-2020 Land Cover Map",
                        "pt": "2000-2020 Land Cover Map",
                        "id": "2000-2020 Land Cover Map",
                        "zh": "2000-2020 Land Cover Map",
                        "ka": "2000-2020 Land Cover Map"
                    },
                    "type": "basic",
                    "items": [
                        {
                            "color": "rgb(254, 254, 204)",
                            "name": {
                                "en": "Bare Ground",
                                "fr": "Bare Ground",
                                "es": "Bare Ground",
                                "pt": "Bare Ground",
                                "id": "Bare Ground",
                                "zh": "Bare Ground",
                                "ka": "Bare Ground"
                            }
                        },
                        {
                            "color": "rgb(185, 185, 30)",
                            "name": {
                                "en": "Short Vegetation",
                                "fr": "Short Vegetation",
                                "es": "Short Vegetation",
                                "pt": "Short Vegetation",
                                "id": "Short Vegetation",
                                "zh": "Short Vegetation",
                                "ka": "Short Vegetation"
                            }
                        },
                        {
                            "color": "rgb(52, 120, 52)",
                            "name": {
                                "en": "Forest",
                                "fr": "Forest",
                                "es": "Forest",
                                "pt": "Forest",
                                "id": "Forest",
                                "zh": "Forest",
                                "ka": "Forest"
                            }
                        },
                        {
                            "color": "rgb(13, 87, 13)",
                            "name": {
                                "en": "Tall Forest (20m+)",
                                "fr": "Tall Forest (20m+)",
                                "es": "Tall Forest (20m+)",
                                "pt": "Tall Forest (20m+)",
                                "id": "Tall Forest (20m+)",
                                "zh": "Tall Forest (20m+)",
                                "ka": "Tall Forest (20m+)"
                            }
                        },
                        {
                            "color": "rgb(136, 202, 173)",
                            "name": {
                                "en": "Wetland - Short Vegetation",
                                "fr": "Wetland - Short Vegetation",
                                "es": "Wetland - Short Vegetation",
                                "pt": "Wetland - Short Vegetation",
                                "id": "Wetland - Short Vegetation",
                                "zh": "Wetland - Short Vegetation",
                                "ka": "Wetland - Short Vegetation"
                            }
                        },
                        {
                            "color": "rgb(88, 149, 88)",
                            "name": {
                                "en": "Wetland - Forest",
                                "fr": "Wetland - Forest",
                                "es": "Wetland - Forest",
                                "pt": "Wetland - Forest",
                                "id": "Wetland - Forest",
                                "zh": "Wetland - Forest",
                                "ka": "Wetland - Forest"
                            }
                        },
                        {
                            "color": "rgb(107, 174, 214)",
                            "name": {
                                "en": "Water",
                                "fr": "Water",
                                "es": "Water",
                                "pt": "Water",
                                "id": "Water",
                                "zh": "Water",
                                "ka": "Water"
                            }
                        },
                        {
                            "color": "rgb(172, 209, 232)",
                            "name": {
                                "en": "Snow/Ice",
                                "fr": "Snow/Ice",
                                "es": "Snow/Ice",
                                "pt": "Snow/Ice",
                                "id": "Snow/Ice",
                                "zh": "Snow/Ice",
                                "ka": "Snow/Ice"
                            }
                        },
                        {
                            "color": "rgb(255, 241, 131)",
                            "name": {
                                "en": "Cropland",
                                "fr": "Cropland",
                                "es": "Cropland",
                                "pt": "Cropland",
                                "id": "Cropland",
                                "zh": "Cropland",
                                "ka": "Cropland"
                            }
                        },
                        {
                            "color": "rgb(232, 118, 93)",
                            "name": {
                                "en": "Built-up Area",
                                "fr": "Built-up Area",
                                "es": "Built-up Area",
                                "pt": "Built-up Area",
                                "id": "Built-up Area",
                                "zh": "Built-up Area",
                                "ka": "Built-up Area"
                            }
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "id": "WRI_UMD_LAND_COVER",
            "type": "umd-land-cover",
            "url": "https://storage.googleapis.com/lcl_tiles/GLCLU{year}/composite{year}/{z}/{x}/{y}.png",
            "technicalName": "umd_land_cover",
            "label": {
                "en": "Land Cover 2000-2020",
                "fr": "Land Cover 2000-2020",
                "es": "Land Cover 2000-2020",
                "pt": "Land Cover 2000-2020",
                "id": "Land Cover 2000-2020",
                "zh": "Land Cover 2000-2020",
                "ka": "Land Cover 2000-2020"
            },
            "sublabel": {
                "en": "Global land use and land cover map for 2000 and 2020",
                "fr": "Global land use and land cover map for 2000 and 2020",
                "es": "Global land use and land cover map for 2000 and 2020",
                "pt": "Global land use and land cover map for 2000 and 2020",
                "id": "Global land use and land cover map for 2000 and 2020",
                "zh": "Global land use and land cover map for 2000 and 2020",
                "ka": "Global land use and land cover map for 2000 and 2020"
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 7,
        "layerGroupId": "GROUP_LC",
        "dataLayer": {
            "id": "TREE_COVER_HEIGHT",
            "order": 7,
            "type": "remoteDataLayer",
            "uuid": "2a83effa-f8be-425b-9766-502e65525861",
            "groupId": "GROUP_LC"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "function": "<p>Show the height of global forest canopy in the years 2000 and 2020.</p>",
                    "geographic_coverage": "<p>Global, with prototype data above 52°N</p>",
                    "download_data": "https://glad.umd.edu/dataset/gedi/",
                    "map_service": "",
                    "subtitle": "2000/2020, 30m, global, UMD/NASA GEDI",
                    "license": "",
                    "title": "Tree cover height",
                    "agol_id": "",
                    "overview": "<p>A new, 30-m spatial resolution global forest canopy height map was developed through the integration of the <a href=\"https://gedi.umd.edu/\">Global Ecosystem Dynamics Investigation</a> (GEDI) lidar forest structure measurements and Landsat analysis-ready data time-series. The NASA GEDI is a spaceborne lidar instrument operating onboard the International Space Station since April 2019. It provides point-based measurements of vegetation structure, including forest canopy height between 52°N and 52°S globally. The Global Land Analysis and Discover team at the University of Maryland (<a href=\"https://glad.umd.edu/\">UMD GLAD</a>) integrated the GEDI data available to date (April-October 2019) with the year 2019 Landsat analysis-ready time-series data (<a href=\"https://glad.umd.edu/ard/home\">Landsat ARD</a>). The GEDI RH95 (relative height at 95%) metric was used to calibrate the model. The Landsat multi-temporal metrics that represent the surface phenology serve as the independent variables for global forest height modeling. The “moving window” locally calibrated and applied regression tree ensemble model was implemented to ensure high quality of forest height prediction and global map consistency. The model was extrapolated in the boreal regions (beyond the GEDI data range) to create the global forest height prototype map.</p>",
                    "citation": "<p>Potapov, P., Li, X., Hernandez-Serna, A., Tyukavina, A., Hansen, M.C., Kommareddy, A., Pickens, A., Turubanova, S., Tang, H., Silva, C.E. and Armston, J., 2021. Mapping global forest canopy height through integration of GEDI and Landsat data. Remote Sensing of Environment, 253, p.112165. <a href=\"https://doi.org/10.1016/j.rse.2020.112165\">https://doi.org/10.1016/j.rse.2020.112165</a>. Accessed through Global Forest Watch on [date]. www.globalforestwatch.org.</p>",
                    "cautions": "<p>The global forest height map is a prototype product that has known issues related to GEDI data quality and Landsat data availability. GEDI data overestimate forest height on slopes within temperate and subtropical mountain grasslands, e.g. in New Zealand and Lesotho. The tree height over cities and suburbs may be confounded with the building height, as GEDI data do not discriminate between the height of vegetation and man-made objects. The GEDI calibration uncertainties (specifically, geolocation precision and land surface height estimation) may be responsible for some of the map errors. The tree height model saturated above 30m and may not adequately represent the height of the tallest trees. The global product will be updated in the future to address most of the issues.</p>",
                    "date_of_content": "<p>2000 and 2020</p>",
                    "learn_more": "https://glad.umd.edu/dataset/gedi/",
                    "source": "<p>Potapov, P., Li, X., Hernandez-Serna, A., Tyukavina, A., Hansen, M.C., Kommareddy, A., Pickens, A., Turubanova, S., Tang, H., Silva, C.E. and Armston, J., 2021. Mapping global forest canopy height through integration of GEDI and Landsat data. Remote Sensing of Environment, 253, p.112165. <a href=\"https://doi.org/10.1016/j.rse.2020.112165\">https://doi.org/10.1016/j.rse.2020.112165</a></p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>30 meters (30 m)</p>",
                    "frequency_of_updates": "",
                    "tags": "Land Cover"
                },
                "legendConfig": {
                    "name": {
                        "en": "Tree cover height",
                        "fr": "Hauteur du couvert végétal",
                        "es": "Altura de la cubierta arbórea",
                        "pt": "Altura da cobertura das árvores",
                        "id": "Tinggi tutupan pohon",
                        "zh": "树木覆盖高度",
                        "ka": "Tree cover height"
                    },
                    "type": "gradient",
                    "items": [
                        {
                            "name": {
                                "zh": "3m",
                                "pt": "3m",
                                "ka": "3m",
                                "id": "3m",
                                "fr": "3m",
                                "es": "3m",
                                "en": "3m"
                            },
                            "color": "#bbffb8"
                        },
                        {
                            "name": {
                                "zh": "30m",
                                "pt": "30m",
                                "ka": "30m",
                                "id": "30m",
                                "fr": "30m",
                                "es": "30m",
                                "en": "30m"
                            },
                            "color": "#045200"
                        }
                    ]
                },
                "interactionConfig": {}
            },
            "id": "TREE_COVER_HEIGHT",
            "type": "tree-cover-height",
            "url": "https://storage.googleapis.com/gfw-data-layers/umd-tree-height/{z}/{x}/{y}.png",
            "technicalName": "tree_cover_height",
            "label": {
                "en": "Tree cover height",
                "es": "Altura de la cubierta arbórea",
                "fr": "Hauteur du couvert végétal",
                "id": "Tinggi tutupan pohon",
                "ka": "Tree cover height",
                "pt": "Altura da cobertura das árvores",
                "zh": "树木覆盖高度"
            },
            "sublabel": {
                "en": "2019, 30m, global, UMD/NASA GEDI",
                "es": "2019, 30m, global, UMD/NASA GEDI",
                "fr": "2019, 30m, mondial, UMD/NASA GEDI",
                "id": "2019, 30m, global, UMD/NASA GEDI",
                "ka": "2019, 30m, global, UMD/NASA GEDI",
                "pt": "2019, 30m, global, UMD/NASA GEDI",
                "zh": "2019年, 30米, 全球, UMD/NASA GEDI"
            }
        },
        "isMetadataError": false,
        "isError": false
    },
    {
        "order": 9,
        "layerGroupId": "GROUP_LC",
        "dataLayer": {
            "id": "TROPICAL_TREE_COVER",
            "order": 9,
            "type": "remoteDataLayer",
            "uuid": "b9183eca-84ed-48ed-83d5-a146a6e2a079",
            "groupId": "GROUP_LC"
        },
        "layer": {
            "metadata": {
                "metadata": {
                    "function": "<p>Displays tree extent at the ten-meter scale and tree cover at the half hectare scale to enable accurate monitoring of trees in urban areas, agricultural lands, and in open canopy and dry forest ecosystems</p>",
                    "geographic_coverage": "<p>4.3 billion hectares of the tropics (-23.44 to 23.44 latitude)</p>",
                    "download_data": "https://data.globalforestwatch.org/datasets/tropical-tree-cover/explore",
                    "map_service": "",
                    "subtitle": "(2020, 10m / half hecatre, Tropics)",
                    "license": "<p><a href=\"https://creativecommons.org/licenses/by/4.0/\">CC BY 4.0</a></p>",
                    "title": "Tropical Tree Cover",
                    "agol_id": "",
                    "overview": "<p>The tropical tree cover data maps tree extent at the ten-meter scale and tree cover at the half hectare scale to enable accurate monitoring of trees in urban areas, agricultural lands, and in open canopy and dry forest ecosystems. The data extends over 4.3 billion hectares of the global tropics.  </p><p>The data is derived from multi-temporal convolutional neural network models applied to Sentinel optical and radar imagery. The 10-meter dataset is a binary tree extent layer that is similar to a land cover map, while the tree cover data represents fractional cover at a half-hectare scale. More details on the methodology and analyses can be found on <a href=\"https://github.com/wri/sentinel-tree-cover/wiki/Product-Specifications\">the GitHub page</a>.</p>",
                    "citation": "<p>Use the following credit when this data is displayed: Source: [date], accessed through Global Forest Watch on [date]  </p><p>Use the following credit when this data is cited: Brandt,<br>Brandt, J., Ertel, J., Spore, J., &amp; Stolle, F. (2023). WALL-to-wall <br>mapping of tree extent in the tropics with sentinel-1 and sentinel-2. Remote Sensing of Environment, 292, 113574. https://doi.org/10.1016/j.rse.2023.11357</p>",
                    "cautions": "<p>This dataset uses a different definition of a tree and a different definition of tree cover than does Hansen et al. (2013). This dataset defines a tree according to both the height and crown diameter. Woody vegetation higher than 5 meters regardless of crown diameter, or between 3 and 5 meters with a minimum crown diameter of 5 meters is considered a tree. This definition is different from Hansen et al. (2013) which defines a tree as any vegetation at least 5 meters in height. The tropical tree cover dataset does not disambiguate plantation trees from non-plantation trees. </p><p>Analyses or statistics derived for shapefiles smaller than 0.5 ha may not be accurate. </p>",
                    "date_of_content": "<p>2020</p>",
                    "learn_more": "",
                    "source": "<p>World Resources Institute</p>",
                    "carto_table": "",
                    "amazon_link": "",
                    "translation": {
                        "fr": {},
                        "es": {}
                    },
                    "other": "",
                    "resolution": "<p>10 x 10 meters, half hectare</p>",
                    "frequency_of_updates": "<p>Yearly change detection maps starting in 2017 are planned for 2024 release.</p>",
                    "tags": "Land Cover"
                },
                "legendConfig": {
                    "name": {
                        "en": "Tropical tree cover",
                        "fr": "Couvert végétal tropica",
                        "es": "Cobertura arbórea tropical",
                        "pt": "Cobertura de árvores tropicais",
                        "id": "Tropical tree cover",
                        "zh": "Tropical tree cover",
                        "ka": "Tropical tree cover"
                    },
                    "type": "basic",
                    "items": [
                        {
                            "outlineColor": "#555555",
                            "color": "#2DBC27",
                            "name": {
                                "en": "Tropical tree cover",
                                "fr": "Couvert végétal tropica",
                                "es": "Cobertura arbórea tropical",
                                "pt": "Cobertura de árvores tropicais",
                                "id": "Tropical tree cover",
                                "zh": "Tropical tree cover",
                                "ka": "Tropical tree cover"
                            }
                        }
                    ]
                },
                "interactionConfig": {},
                "colormap": [
                    [
                        1,
                        0,
                        179,
                        0
                    ]
                ],
                "inputRange": [
                    30,
                    101
                ],
                "outputRange": [
                    1
                ]
            },
            "id": "WRI_TROPICAL_TREE_COVER",
            "type": "tropical-tree-cover",
            "url": "https://tiles.globalforestwatch.org/wri_trees_in_mosaic_landscapes/v20220922/tcd_40/{z}/{x}/{y}.png",
            "technicalName": "wri_tropical_tree_cover",
            "colormap": [
                [
                    1,
                    0,
                    179,
                    0
                ]
            ],
            "inputRange": [
                30,
                101
            ],
            "outputRange": [
                1
            ],
            "opacity": 0.8,
            "label": {
                "en": "Tropical tree cover",
                "fr": "Couvert végétal tropica",
                "es": "Cobertura arbórea tropical",
                "pt": "Cobertura de árvores tropicais",
                "id": "Tropical tree cover",
                "zh": "Tropical tree cover",
                "ka": "Tropical tree cover"
            },
            "sublabel": {
                "en": "2020, 10m/0.5ha, tropical, UMD",
                "fr": "2020, 10m/0.5ha, tropical, WRI",
                "es": "2020, 10m/0.5ha, tropical, WRI",
                "pt": "2020, 10m/0.5ha, tropical, WRI",
                "id": "2020, 10m/0.5ha, tropical, WRI",
                "zh": "2020年，10米/0.5公顷，热带，世界资源研究所",
                "ka": "2020, 10m/0.5ha, tropical, WRI"
            }
        },
        "isMetadataError": false,
        "isError": false
    }

]