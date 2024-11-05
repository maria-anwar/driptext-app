export interface Task {
    actualNumberOfWords: string;
    feedback: string | null;
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
    project: Project;
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

  
  
 export interface Earn {
    _id: string;
    createdAt: string;  
    date: string;  
    difference:  null |number;
    finalize: boolean;
    freelancer: string;  
    isActive: string;  
    price: number ; 
    project: Project;  
    role: string;  
    task: Task;  
    updatedAt: string;  
    billedWords:  null |number; 
  }

  
  
  interface BillingInfo {
    iban?: string;
    vatRegulation?: string;
  }
  
  export interface UserData {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    street?: string;
    postCode?: string;
    city?: string;
    country?: string;
    billingInfo?: BillingInfo;
    companyName?: string;
    vatIdNo?: string;
  }