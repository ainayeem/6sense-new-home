export interface ICaseStudyInfo {
  status: number
  data: {
    _id: string,
    id: number
  appName: string
  logo: string
  slug: string
  imageSrc: string
  details: {
    coloredPartTitle: string
  regularTitle: string
  heroInfo: {
    icon: string
    alt: string
    title: string
    subtitle: string
    _id: string,
    id: number
  }[]
  overviewParagraphs: string[]
  overviewImage: string
  aboutParagraph: string
  aboutInfo: {
    icon: string
    alt: string
    subtitle: string
    title: string
    _id: string,
    id: number
  }[]
  solution: {
    description: string
    solutionsPoints1: string[]
    solutionsPoints2: string[]
    solutionImage: string
    _id: string,
    id: number
  }
  keyFeature: {
    description: string
    keyFeaturesPoints1: string[]
    keyFeaturesPoints2: string[]
    keyFeaturesImage: string
    _id: string,
    id: number
  }
  result: {
    description: string
    resultsPoints1: string[]
    resultsPoints2: string[]
    _id: string,
    id: number
  }
  clientFeedback: {
    clientNameAndDesignation: string
    clientImage: string
    feedback: string
    _id: string,
    id: number
  }
  _id: string,
  id: number
  }
  __v: number
  createdAt: string
  updatedAt: string
  }
  message: string
}

export interface IAchievements {
    id: number,
    image: string,
    alt: string,
    contentStart: string,
    contentHighlight: string,
    contentEnd: string
}

export interface IOrganization {
  id: number,
  image: string,
  alt: string
}
export interface IAppsData {
  id: number,
  title: string,
  imageSrc: string
}

export interface IItemInfo {
  id: number,
  icon: string,
  alt: string,
  title: string,
  text: string
}

export interface ITeamInfo {
  status: number
  data: {
    id: number
    _id: string
    title: string
    image: string
    __v: number
  }[]
  message: string
}


