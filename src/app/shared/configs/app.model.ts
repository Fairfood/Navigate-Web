export interface IdTokenRequest {
  client_id?: string;
  client_secret?: string;
  code: string;
  redirect_uri?: string;
  grant_type?: string;
}

export interface IdTokenResponse {
  access_token: string;
  id_token: string;
  refresh_token: string;
}

export interface IRefreshTokenApi {
  refresh_token: string;
  grant_type?: string;
  client_id?: string;
  client_secret?: string;
}

export interface IFilters {
  country: string
  supplychain: string
  batch: string
  farmerGroup: string
}

export type ISupplychainData = Supplychain[]

export interface Supplychain {
  id: string
  updated_on: string
  created_on: string
  name: string
  image: any
  creator: any
  updater: any
}

export type ICountryData = ICountry[]

export interface ICountry {
  id: string
  name: string
}


export type IBatches = IBatch[]

export interface IBatch {
  id: string
  name: string
  updated_on: string
  created_on: string
  external_id: string
  creator: any
  updater: any
  supply_chain: string
  farmers: string[]
}


export interface ITableData {
  title: string
  description: string
  head: Head[]
  rows: Row[]
}

export interface Head {
  id: number
  name: string
  info?: string
}

export interface Row {
  id: number
  values: [string, string, number, number, number]
  details?: Details
}

export interface Details { }


export type IImpactData = Data[]

export interface Data {
  name: string
  is_passed: boolean
  indexes: Index[]
}

export interface Index {
  name: string
  is_passed: boolean
}

export type IAcceptableData = Index[]

export type IPillars = string[]

export interface ICompanyData {
  id: string
  farmer_countries: string[]
  supply_chains: Supplychain[]
  updated_on: string
  created_on: string
  street: string
  city: string
  state: string
  country: string
  zip_code: string
  image: any
  name: string
  pillers: string[]
  sso_id: string
  creator: any
  updater: any
  title: string
  sub_title: string
  description: string
}

export type IFarmsData = Farm[]

export interface Farm {
  id: string
  name: string
}

export interface IPlotData {
  polygons: number[][][]
  point: number[][]
  layers: Layer[]
}

export interface Layer {
  label: string
  url: string
  maxScale: number
  visible: boolean
}


export interface IMapData {
  layers: Layers[]
  location: Location[]
  legend: Legend
}

export interface Layers {
  name: string
  position: number
  id: string
  turn_on: string
}

export type ILayers = Layers[]


export interface Location {
  id: number
  coordinate: number[][]
  lip: Lip
  prod_cost: ProdCost
  production: Production
}

export interface Lip {
  value: string
  color: string
}

export interface ProdCost {
  value: string
  color: string
}

export interface Production {
  value: string
  color: string
}

export interface Legend {
  lip: Lip2
  prod_cost: ProdCost2
  production: Production2
}

export interface Lip2 {
  title: string
  unit: string
  current: Current
  min: Min
  max: Max
}

export interface Current {
  mean: number
  median: number
  is_dual_value: boolean
}

export interface Min {
  value: number
  color: string
  is_dual_value: boolean
}

export interface Max {
  value: number
  color: string
  is_dual_value: boolean
}

export interface ProdCost2 {
  title: string
  unit: string
  current: Current2
  min: Min2
  max: Max2
}

export interface Current2 {
  mean: number
  median: number
  is_dual_value: boolean
}

export interface Min2 {
  value: number
  color: string
  is_dual_value: boolean
}

export interface Max2 {
  value: number
  color: string
  is_dual_value: boolean
}

export interface Production2 {
  title: string
  unit: string
  current: Current3
  min: Min3
  max: Max3
}

export interface Current3 {
  mean: number
  median: number
  is_dual_value: boolean
}

export interface Min3 {
  value: number
  color: string
  is_dual_value: boolean
}

export interface Max3 {
  value: number
  color: string
  is_dual_value: boolean
}

export interface IAssessmentData {
  title: string
  description: string
  indexes: Items[]
}

export interface Items {
  name: string
  value: Value
}

export interface Value {
  mean: string
  median: string
  is_dual_value: string
}

export type ITableStats = Items[]


export interface IGraphData {
  living_income_price: LivingIncomePrice
  cost_of_production: CostOfProduction
  production: Production
}

export type IGraphArray = LivingIncomePrice[]

export interface LivingIncomePrice {
  title: string
  id: number
  unit: string
  area: string
  center_label: CenterLabel
  categories: Category[]
}

export interface CenterLabel {
  title: string
  value: Values
}

export interface Values {
  mean: number
  median: number
  is_dual_value: string
}

export interface Category {
  title: string
  min_range: number
  max_range: number
  value: number
  value_in_percentage: number
}

export interface CostOfProduction {
  title: string
  id: number
  unit: string
  area: string
  center_label: CenterLabel2
  categories: Category2[]
}

export interface CenterLabel2 {
  title: string
  value: Value2
}

export interface Value2 {
  mean: number
  median: number
  is_dual_value: string
}

export interface Category2 {
  title: string
  min_range: number
  max_range: number
  value: number
  value_in_percentage: number
}

export interface Production {
  title: string
  id: number
  unit: string
  area: string
  center_label: CenterLabel3
  categories: Category3[]
}

export interface CenterLabel3 {
  title: string
  value: Value3
}

export interface Value3 {
  mean: number
  median: number
  is_dual_value: string
}

export interface Category3 {
  title: string
  min_range: number
  max_range: number
  value: number
  value_in_percentage: number
}


export interface ISummaryData {
  title: string
  description: string
  gender_bar: GenderBar
  tiles: Tiles
}

export interface GenderBar {
  sections: Section[]
  title: string
}

export interface Section {
  name: string
  percentage: string
}

export interface Tiles {
  farmers_participated: FarmersParticipated
  lip_farmers: LipFarmers
  plot_size: PlotSize
  house_hold_size: HouseHoldSize
  male: Male
  female: Female
}

export interface FarmersParticipated {
  name: string
  icon: string
  value: SummaryValue
}

export interface SummaryValue {
  mean: string
  median?:string
  is_dual_value: string
}

export interface LipFarmers {
  name: string
  type: string
  icon: string
  value: SummaryValue2
}

export interface SummaryValue2 {
  mean: string
  median?:string
  is_dual_value: string
}

export interface PlotSize {
  name: string
  type: string
  icon: string
  value: SummaryValue3
}

export interface SummaryValue3 {
  mean: string
  median: string
  is_dual_value: string
}

export interface HouseHoldSize {
  name: string
  type: string
  icon: string
  value: SummaryValue4
}

export interface SummaryValue4 {
  mean: string
  median: string
  is_dual_value: string
}

export interface Male {
  name: string
  type: string
  icon: string
  value: SummaryValue5
}

export interface SummaryValue5 {
  mean: string
  median?:string
  is_dual_value: string
}

export interface Female {
  name: string
  type: string
  icon: string
  value: SummaryValue6
}

export interface SummaryValue6 {
  mean: string
  median?:string
  is_dual_value: string
}

export interface ILivingIncomeFilterData {
  supply_chains: Supplychain[]
  farmer_countries: FarmerCountry[]
  farmer_groups: FarmerGroup[]
}

export interface FarmerCountry {
  id: string
  name: string
}

export interface FarmerGroup {
  id: string
  name: string
}


export interface IInterventionsData {
  title: string
  description: string
  items: Item[]
}

export interface Item {
  name: string
  description: string
  more_url: string
  desc_short: string
  image: string
  packages: any[]
}

export interface IUserData {
  id: string
  username: string
  first_name: string
  last_name: string
  email: string
  profile_image: any
  sso_id: string
  default_company: string
  companies: Company[]
  theme: string
  calculated_farms: number
  total_farms: number
  image?: string;
  uncalculated_farms?: number;
}

export interface Company {
  id: string
  name: string
  image: any
}


// export interface IResultEmissions {
//   title: string
//   standards: StandardsEmissions
// }

// export interface StandardsEmissions {
//   emissions: Emissions
// }

export interface IResultData {
  title: string
  standards: Standards
}

export interface Standards {
  lip?: Lip
  emissions?: Emissions
}

export interface Lip {
  name: string
  indexes: Indexes
  progress_bar: ProgressBar
}

export interface Indexes {
  current_pay: CurrentPay
  living_income: LivingIncome
  price_gap: PriceGap
  living_income_percentage: LivingIncomePercentage
}

export interface CurrentPay {
  name: string
  value: ResultDataValue
}

export interface ResultDataValue {
  mean: string
  median: string
  is_dual_value: string
}

export interface LivingIncome {
  name: string
  value: ResultDataValue2
}

export interface ResultDataValue2 {
  mean: string
  median: string
  is_dual_value: string
}

export interface PriceGap {
  name: string
  value: ResultDataValue3
}

export interface ResultDataValue3 {
  mean: string
  median: string
  mean_color: string
  median_color: string
  is_dual_value: string
}

export interface LivingIncomePercentage {
  title: string
  value: ResultDataValue3
}

export type IIndexArrayLip = LivingIncomePercentage[]


export interface ProgressBar {
  mean_bar: MeanBar[]
  median_bar: MedianBar[]
}

export interface MeanBar {
  description: string
  value: string
  color: string
  percentage: string
}

export interface MedianBar {
  description: string
  value: string
  color: string
  percentage: string
}

export interface Emissions {
  name: string
  indexes: IndexesEmissions
  progress_bar: ProgressBarEmissions
}

export interface IndexesEmissions {
  past_year: PastYear
  current_year: CurrentYear
  annual_variation: AnnualVariation
  carbon_removed: CarbonRemoved
}

export interface PastYear {
  name: string
  value: number
  color: string
}

export interface CurrentYear {
  name: string
  value: number
  color: string
}

export interface AnnualVariation {
  name: string
  value: number
  color: string
}

export interface CarbonRemoved {
  name: string
  description: string
  value: number
  color: string
}

export interface ProgressBarEmissions {
  mean_bar: MeanBar[]
  median_bar?: MedianBar[]
}

export interface MeanBar {
  description: string
  value: string
  color: string
  percentage: string
}


export type IFilterOptions = Options[]

export interface Options {
  id: string
  name: string
}

export type ITableRows = TableData[]

export interface TableData {
  values?: [string, string, number, number, string, string, number]
  comments: any[]
}

export interface ITableDataDetails {
  title: string
  description: string
  table: Table
}

export interface Table {
  methods: string[]
  head: string[]
  rows: TableData[]
}

export type IPoint = number[][]
