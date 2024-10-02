export interface Task {
    actualNumberOfWords: string;
    comments: string;
    createdAt: string;
    desiredNumberOfWords: string;
    dueDate: string;
    fileId: string;
    fileLink: string;
    activeRole:string;
    googleLink: string | null;
    isActive: string;
    keywords: string;
    lector: string;
    metaLector: string | null;
    project: string;
    published: boolean;
    readyToWork: boolean;
    seo: string;
    status: string;
    taskId: number;
    taskName: string;
    texter: string;
    topic: string;
    type: string;
    updatedAt: string;
    user: string;
    __v: number;
    _id: string;
  }
  export interface Plan {
    _id: string;
    plan: string;
    user: string;
    subPlan: string;
    project: Project;
    subscription: string;
    startDate: string;
    endDate: string;
    totalTexts: number;
    duration: number;
    textsCount: number;
    textsRemaining: number;
    tasksPerMonth: number;
    tasksPerMonthCount: number;
    endMonthDate: string;
    isActive: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  export interface Project {
    _id: string;
    projectId: string;
    onBoarding: boolean;
    projectName: string;
    folderLink: string;
    folderId: string;
    tasks: number;
    speech: string;
    keywords: string | null;
    perspective: string | null;
    projectStatus: string;
    user: string;
    projectTasks: string[];
    plan: Plan;
    texter: string | null;
    lector: string | null;
    seo: string | null;
    metaLector: string | null;
    isActive: string;
    createdAt: string;
    updatedAt: string;
    id: number;
    __v: number;
    openTasks: number;
    finalTasks: number;
  }

  export interface OnBoarding {
    companyBackgorund: string | null;
    companyAttributes: string | null;
    comapnyServices: string | null;
    customerContent: string | null;
    customerIntrest: string | null;
    contentPurpose: string | null;
    contentInfo: string | null;
  }