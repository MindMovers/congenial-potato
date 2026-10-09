import type {
  College,
  Scholarship,
  ExamMock,
  GraphNode,
  GraphEdge,
  VideoLecture,
  NoteModule,
  SkillGapTarget,
  CompanyInterviewModule,
  UserProfile
} from '../types';

export const AP_DISTRICTS = [
  { name: 'Visakhapatnam', livingCost: 'Moderate', institutesCount: 42, hub: 'IT & Pharma Hub' },
  { name: 'Vijayawada (NTR)', livingCost: 'Moderate-High', institutesCount: 38, hub: 'Commercial & Education Hub' },
  { name: 'Guntur', livingCost: 'Moderate', institutesCount: 35, hub: 'Medical & Agricultural Center' },
  { name: 'Tirupati', livingCost: 'Moderate', institutesCount: 29, hub: 'University & Research Hub' },
  { name: 'Kakinada', livingCost: 'Affordable', institutesCount: 24, hub: 'Engineering & Deep Sea Port' },
  { name: 'Kurnool', livingCost: 'Affordable', institutesCount: 22, hub: 'Rayalaseema Medical Hub' },
  { name: 'Anantapur', livingCost: 'Affordable', institutesCount: 20, hub: 'Solar & Technical Hub' },
  { name: 'Nellore (SPSR Nellore)', livingCost: 'Affordable', institutesCount: 19, hub: 'Space & Coastal Industrial' },
  { name: 'Chittoor', livingCost: 'Affordable', institutesCount: 18, hub: 'Border Commerce & Milk Hub' },
  { name: 'Prakasam (Ongole)', livingCost: 'Affordable', institutesCount: 16, hub: 'Granite & Maritime' },
  { name: 'Kadapa (YSR)', livingCost: 'Affordable', institutesCount: 17, hub: 'Mineral & Tech Institute' },
  { name: 'Eluru', livingCost: 'Affordable', institutesCount: 15, hub: 'Aqua & Agriculture' },
  { name: 'East Godavari (Rajahmundry)', livingCost: 'Affordable', institutesCount: 18, hub: 'Arts, Culture & Oil' },
  { name: 'West Godavari (Bhimavaram)', livingCost: 'Affordable', institutesCount: 16, hub: 'Aqua-Tech & Engineering' },
  { name: 'Srikakulam', livingCost: 'Affordable', institutesCount: 14, hub: 'Pharma & Border Trade' },
  { name: 'Vizianagaram', livingCost: 'Affordable', institutesCount: 15, hub: 'Textile & Engineering' },
  { name: 'Parvathipuram Manyam', livingCost: 'Very Low', institutesCount: 8, hub: 'Tribal Skill Development' },
  { name: 'Alluri Sitharama Raju', livingCost: 'Very Low', institutesCount: 7, hub: 'Eco-Forestry & Poly' },
  { name: 'Anakapalli', livingCost: 'Affordable', institutesCount: 12, hub: 'Jaggery & Heavy Metal Industry' },
  { name: 'Konaseema', livingCost: 'Affordable', institutesCount: 11, hub: 'Coconut & Bio-energy' },
  { name: 'Palnadu', livingCost: 'Affordable', institutesCount: 13, hub: 'Cement & Power Sector' },
  { name: 'Bapatla', livingCost: 'Affordable', institutesCount: 10, hub: 'Agriculture Research Hub' },
  { name: 'Nandyal', livingCost: 'Affordable', institutesCount: 12, hub: 'Cement & Hydro Energy' },
  { name: 'Sri Sathya Sai', livingCost: 'Affordable', institutesCount: 11, hub: 'Aviation & Social Service' },
  { name: 'Annamayya', livingCost: 'Affordable', institutesCount: 9, hub: 'Horticulture & Granite' },
];

export const MOCK_PROFILES: UserProfile[] = [
  {
    id: 'user-1',
    name: 'Sai Kumar Reddy',
    currentStream: 'Class 10 (SSC)',
    targetRole: 'AI & Data Science Engineer',
    district: 'Visakhapatnam',
    grade: 'Class 10 Pass',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    isProfileLocked: false,
    pinCode: '1234',
    familyIncome: 180000,
    aadhaarLast4: '9842',
    scholarshipId: 'AP-JVD-2026-8841',
    completedModules: ['note-physics-101', 'video-math-201'],
    testScores: { 'AP EAPCET Mock 1': 88, 'NEET Mock 1': 62 },
    verifiedBadges: ['MPC Stream Explorer', 'Math Quiz Champion', 'Pass Guarantee Certified'],
    cachedDownloads: ['note-physics-101', 'vid-1']
  },
  {
    id: 'user-2',
    name: 'Ananya Lakshmi',
    currentStream: 'Intermediate BiPC',
    targetRole: 'MBBS Doctor / Clinical Researcher',
    district: 'Vijayawada (NTR)',
    grade: 'Inter 2nd Year',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150',
    isProfileLocked: true,
    pinCode: '4321',
    familyIncome: 220000,
    aadhaarLast4: '4109',
    scholarshipId: 'AP-JVD-2026-9932',
    completedModules: ['note-bio-102'],
    testScores: { 'NEET Mock 1': 92 },
    verifiedBadges: ['BiPC Scholar', 'Biology Wizard'],
    cachedDownloads: ['note-bio-102']
  }
];

export const MOCK_COLLEGES: College[] = [
  {
    id: 'col-1',
    name: 'Andhra University College of Engineering (AUCE)',
    district: 'Visakhapatnam',
    type: 'Government',
    category: 'Engineering',
    nirfRank: 45,
    estYear: 1955,
    totalSeats: 720,
    avgFeesPerYear: 35000,
    cutoffRank: 'AP EAPCET Rank < 3,500',
    placementRate: 94,
    avgPackageLpa: 8.5,
    facilities: ['High-speed Fiber WiFi', 'AI & Robotics Lab', 'Central Library', 'Sports Complex', 'Hostel'],
    popularCourses: ['B.Tech CSE (AI & ML)', 'B.Tech ECE', 'B.Tech Mechanical', 'B.Tech Chemical']
  },
  {
    id: 'col-2',
    name: 'JNTU College of Engineering, Kakinada',
    district: 'Kakinada',
    type: 'Government',
    category: 'Engineering',
    nirfRank: 52,
    estYear: 1946,
    totalSeats: 680,
    avgFeesPerYear: 38000,
    cutoffRank: 'AP EAPCET Rank < 4,800',
    placementRate: 91,
    avgPackageLpa: 7.8,
    facilities: ['Siemens Center of Excellence', 'Digital Library', 'Incubation Center', 'Hostels'],
    popularCourses: ['B.Tech Computer Science', 'B.Tech Electrical & Electronics', 'B.Tech Civil']
  },
  {
    id: 'col-3',
    name: 'Andhra Medical College (AMC)',
    district: 'Visakhapatnam',
    type: 'Government',
    category: 'Medical/Healthcare',
    nirfRank: 28,
    estYear: 1923,
    totalSeats: 250,
    avgFeesPerYear: 15000,
    cutoffRank: 'NEET Rank < 8,500',
    placementRate: 100,
    avgPackageLpa: 12.0,
    facilities: ['King George Hospital Attachment', 'Super-Specialty Research Lab', 'Anatomy Museum'],
    popularCourses: ['MBBS', 'MD General Medicine', 'MS General Surgery', 'B.Sc Nursing']
  },
  {
    id: 'col-4',
    name: 'Siddhartha Medical College',
    district: 'Vijayawada (NTR)',
    type: 'Government',
    category: 'Medical/Healthcare',
    nirfRank: 42,
    estYear: 1980,
    totalSeats: 175,
    avgFeesPerYear: 18000,
    cutoffRank: 'NEET Rank < 12,000',
    placementRate: 98,
    avgPackageLpa: 10.5,
    facilities: ['Govt General Hospital Vijayawada', 'Advanced Physiology Lab', 'Auditorium'],
    popularCourses: ['MBBS', 'B.Pharm', 'D.Pharm', 'BPT (Physiotherapy)']
  },
  {
    id: 'col-5',
    name: 'Sri Venkateswara University (SVU)',
    district: 'Tirupati',
    type: 'Government',
    category: 'Commerce/Arts',
    nirfRank: 60,
    estYear: 1954,
    totalSeats: 1200,
    avgFeesPerYear: 22000,
    cutoffRank: 'AP ICET / Merit Based',
    placementRate: 85,
    avgPackageLpa: 6.2,
    facilities: ['Incubation Hub', 'Central Library', 'Botanical Garden', 'Hostel'],
    popularCourses: ['B.Com (Computer Applications)', 'MBA (Finance)', 'M.Sc Biotechnology']
  },
  {
    id: 'col-6',
    name: 'Government Polytechnic College, Vijayawada',
    district: 'Vijayawada (NTR)',
    type: 'Polytechnic',
    category: 'Vocational',
    estYear: 1961,
    totalSeats: 450,
    avgFeesPerYear: 4800,
    cutoffRank: 'AP POLYCET Rank < 2,200',
    placementRate: 88,
    avgPackageLpa: 3.8,
    facilities: ['Workshop Labs', 'CNC Milling Center', 'Skill AP Center'],
    popularCourses: ['Diploma in Computer Engineering', 'Diploma in Mechanical', 'Diploma in Electrical']
  }
];

export const MOCK_SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'sch-1',
    name: 'Jagananna Vidya Deevena (JVD)',
    type: 'State AP',
    benefitAmount: '100% Full Tuition Fee Reimbursement directly paid to institution',
    eligibilityCriteria: [
      'Student enrolled in Polytechnic, ITI, Degree, Engineering, Medicine, CA in AP',
      'Annual family income less than ₹2,500,000',
      'Minimum 75% class attendance requirement'
    ],
    maxIncomeLimit: 250000,
    documentsRequired: ['Rice Card / Income Certificate', 'Aadhaar Card', 'College Admission Receipt', 'Bank Passbook'],
    deadline: '2026-11-30',
    portalUrl: 'https://jnanabhumi.ap.gov.in',
    applicationStatus: 'Eligible',
    category: 'Higher Education Fee Exemption'
  },
  {
    id: 'sch-2',
    name: 'Jagananna Vasathi Deevena (JVD Mess & Hostel Aid)',
    type: 'State AP',
    benefitAmount: '₹20,000 per year for Degree/Engg/Med (paid in 2 installments of ₹10,000)',
    eligibilityCriteria: [
      'Residing in college hostels or certified paying guest accommodation',
      'AP Resident student registered on JnanaBhumi portal'
    ],
    maxIncomeLimit: 250000,
    documentsRequired: ['Hostel Certificate', 'Mother’s Bank Account Details', 'Student Aadhaar'],
    deadline: '2026-12-15',
    portalUrl: 'https://jnanabhumi.ap.gov.in',
    applicationStatus: 'Eligible',
    category: 'Living & Accommodation Support'
  },
  {
    id: 'sch-3',
    name: 'National Scholarship Portal (NSP Post-Matric)',
    type: 'National',
    benefitAmount: '₹12,000 to ₹30,000 per annum + Maintenance Stipend',
    eligibilityCriteria: [
      'Students belonging to SC / ST / OBC / EWS / Minority communities',
      'Scored > 60% in previous qualifying examination'
    ],
    maxIncomeLimit: 200000,
    documentsRequired: ['Caste Certificate', 'Income Certificate', 'Previous Marksheet', 'Bonafide Certificate'],
    deadline: '2026-10-31',
    portalUrl: 'https://scholarships.gov.in',
    applicationStatus: 'Eligible',
    category: 'Central Govt Financial Support'
  },
  {
    id: 'sch-4',
    name: 'AICTE Pragati Scholarship for Girl Students',
    type: 'National',
    benefitAmount: '₹50,000 per annum for duration of Technical Course',
    eligibilityCriteria: [
      'Girl student admitted to 1st year of Diploma/Degree in AICTE approved institution',
      'Maximum 2 girls per family eligible'
    ],
    maxIncomeLimit: 800000,
    documentsRequired: ['Class 10/12 Marksheet', 'Family Income Cert', 'Tuition Fee Receipt'],
    deadline: '2026-11-15',
    portalUrl: 'https://www.aicte-india.org',
    applicationStatus: 'Eligible',
    category: 'Women in Tech Incentive'
  }
];

export const MOCK_EXAMS: ExamMock[] = [
  {
    id: 'exam-eapcet-1',
    title: 'AP EAPCET Engineering & Agriculture Full Mock Test 2026',
    category: 'AP EAPCET',
    totalQuestions: 5,
    timeLimitMinutes: 15,
    year: '2025-2026 PYQ Pattern',
    questions: [
      {
        id: 'q1',
        question: 'In a uniform circular motion of radius R, if the speed of the body is doubled, what happens to its centripetal acceleration?',
        options: ['It remains same', 'It doubles', 'It quadruples (4x)', 'It is halved'],
        correctAnswer: 2,
        explanation: 'Centripetal acceleration a = v²/R. If v is doubled (2v), a becomes (2v)²/R = 4(v²/R), which quadruples.',
        subject: 'Physics',
        difficulty: 'Easy'
      },
      {
        id: 'q2',
        question: 'Which of the following organic compounds will give a positive Idoform test?',
        options: ['Methanol', 'Ethanol (CH3CH2OH)', 'Benzaldehyde', 'Diethyl Ether'],
        correctAnswer: 1,
        explanation: 'Ethanol contains the CH3-CH(OH)- group which oxidizes to acetaldehyde (CH3CHO) containing the CH3C=O methyl ketone structure necessary for Iodoform test.',
        subject: 'Chemistry',
        difficulty: 'Medium'
      },
      {
        id: 'q3',
        question: 'If A is a square matrix of order 3 such that |A| = 5, then what is the value of |adj(A)|?',
        options: ['5', '25', '125', '1/5'],
        correctAnswer: 1,
        explanation: 'Formula: |adj(A)| = |A|^(n-1). For n=3, |adj(A)| = 5^(3-1) = 5² = 25.',
        subject: 'Mathematics',
        difficulty: 'Medium'
      },
      {
        id: 'q4',
        question: 'What is the principal site of photosynthesis in C4 plants during carbon fixation?',
        options: ['Epidermal Cells', 'Mesophyll & Bundle Sheath Cells', 'Xylem Vessels', 'Stomata Guard Cells'],
        correctAnswer: 1,
        explanation: 'C4 plants exhibit Kranz anatomy where initial CO2 fixation takes place in Mesophyll cells (PEP carboxylase) and Calvin cycle occurs in Bundle Sheath cells.',
        subject: 'Botany / Biology',
        difficulty: 'Medium'
      },
      {
        id: 'q5',
        question: 'The work done by a conservative force along a closed path is always equal to:',
        options: ['Maximum positive value', 'Zero', 'Negative work done', 'Dependent on time taken'],
        correctAnswer: 1,
        explanation: 'By definition of conservative forces (like gravitational or electrostatic forces), line integral of force along any closed path is zero: ∮ F · dr = 0.',
        subject: 'Physics',
        difficulty: 'Easy'
      }
    ]
  },
  {
    id: 'exam-neet-1',
    title: 'NEET UG Medical Entrance High-Yield Mock Test',
    category: 'NEET UG',
    totalQuestions: 4,
    timeLimitMinutes: 12,
    year: '2025 Real NTA Pattern',
    questions: [
      {
        id: 'nq1',
        question: 'Which part of the human brain controls body temperature, hunger, and thirst?',
        options: ['Cerebellum', 'Thalamus', 'Hypothalamus', 'Medulla Oblongata'],
        correctAnswer: 2,
        explanation: 'The Hypothalamus contains neurosecretory center that acts as the thermostat of the body and regulates hunger, thirst, and endocrine functions.',
        subject: 'Biology (Zoology)',
        difficulty: 'Easy'
      },
      {
        id: 'nq2',
        question: 'What is the hybridisation of the central Nitrogen atom in NO3- (Nitrate ion)?',
        options: ['sp', 'sp2', 'sp3', 'sp3d'],
        correctAnswer: 1,
        explanation: 'Steric number of N in NO3- is 3 (3 bond pairs, 0 lone pairs), yielding sp2 trigonal planar geometry.',
        subject: 'Chemistry',
        difficulty: 'Medium'
      },
      {
        id: 'nq3',
        question: 'During human DNA replication, Okazaki fragments are synthesized continuously on which strand?',
        options: ['Leading strand', 'Lagging strand in 5\' to 3\' direction', 'Both strands', 'Template 3\' to 5\' only'],
        correctAnswer: 1,
        explanation: 'Okazaki fragments form discontinous short segments on the lagging strand synthesized in 5\' to 3\' direction.',
        subject: 'Biology (Genetics)',
        difficulty: 'Medium'
      },
      {
        id: 'nq4',
        question: 'A body dropped from height H takes time T to reach ground. What is the distance covered in time T/2?',
        options: ['H / 2', 'H / 4', '3H / 4', 'H / 8'],
        correctAnswer: 1,
        explanation: 'Using S = (1/2)gt², at t=T, H = (1/2)gT². At t=T/2, S = (1/2)g(T/2)² = (1/4)*(1/2)gT² = H/4.',
        subject: 'Physics',
        difficulty: 'Medium'
      }
    ]
  },
  {
    id: 'exam-ssc-1',
    title: 'SSC CHSL & Railway RRB NTPC General Aptitude Test',
    category: 'SSC',
    totalQuestions: 4,
    timeLimitMinutes: 10,
    year: '2025 PYQ',
    questions: [
      {
        id: 'sq1',
        question: 'If the price of petrol increases by 25%, by what percentage must a driver reduce petrol consumption to keep expenditure constant?',
        options: ['20%', '25%', '15%', '18%'],
        correctAnswer: 0,
        explanation: 'Formula: % reduction = [r / (100 + r)] * 100 = [25 / 125] * 100 = 1/5 * 100 = 20%.',
        subject: 'Quantitative Aptitude',
        difficulty: 'Easy'
      },
      {
        id: 'sq2',
        question: 'Which Article of the Indian Constitution guarantees the Right to Equality before Law?',
        options: ['Article 14', 'Article 19', 'Article 21', 'Article 32'],
        correctAnswer: 0,
        explanation: 'Article 14 guarantees equality before law and equal protection of laws to all persons in India.',
        subject: 'General Awareness & Indian Polity',
        difficulty: 'Easy'
      },
      {
        id: 'sq3',
        question: 'Find the odd one out: 64, 125, 216, 343, 512, 625',
        options: ['343', '512', '625', '125'],
        correctAnswer: 2,
        explanation: '64 = 4³, 125 = 5³, 216 = 6³, 343 = 7³, 512 = 8³. However, 625 = 25² (it is not a perfect cube of an integer, whereas others are perfect cubes).',
        subject: 'Reasoning & Mental Ability',
        difficulty: 'Medium'
      },
      {
        id: 'sq4',
        question: 'Who was the founder of the Satavahana Dynasty that ruled over ancient Andhra Pradesh?',
        options: ['Gautamiputra Satakarni', 'Simuka', 'Pulakeshin II', 'Rajaraja Narendra'],
        correctAnswer: 1,
        explanation: 'Simuka was the founder of the Satavahana Dynasty around 230 BCE.',
        subject: 'AP History & Culture',
        difficulty: 'Medium'
      }
    ]
  }
];

export const MOCK_GRAPH_NODES: GraphNode[] = [
  { id: 'n-class10', title: 'Class 10 SSC / CBSE', category: 'Stream', x: 80, y: 250, description: 'Baseline secondary completion. Gateway to Intermediate (MPC, BiPC, MEC, CEC) or Vocational (Polytechnic, ITI).' },
  
  // MPC Pathway
  { id: 'n-mpc', title: 'Inter MPC (Maths, Physics, Chem)', category: 'Stream', x: 260, y: 120, description: '2-Year course for analytical, engineering, software, and physical science careers.', duration: '2 Years', costEst: '₹15,000 - ₹50,000' },
  { id: 'n-eapcet-engg', title: 'AP EAPCET / JEE Main', category: 'Exam', x: 460, y: 100, description: 'State and National entrance exams for B.Tech & B.E admissions in AP colleges.' },
  { id: 'n-btech-cs', title: 'B.Tech Computer Science & AI', category: 'Degree', x: 680, y: 80, description: '4-Year undergraduate engineering degree covering algorithms, machine learning, cloud, web dev.', duration: '4 Years', avgSalary: '₹6.5 - ₹24 LPA' },
  { id: 'n-skill-cloud', title: 'Fullstack & Machine Learning', category: 'Skill', x: 880, y: 80, description: 'Competencies: React, Python, TensorFlow, System Design, SQL.' },
  { id: 'n-job-ai-engg', title: 'AI & Data Science Engineer', category: 'Career', x: 1080, y: 80, description: 'Build smart applications, data pipelines, predictive models.', avgSalary: '₹8.0 - ₹30 LPA' },

  // BiPC Pathway
  { id: 'n-bipc', title: 'Inter BiPC (Biology, Physics, Chem)', category: 'Stream', x: 260, y: 250, description: '2-Year course focused on medical, clinical research, biotechnology, agriculture, pharmacy.', duration: '2 Years', costEst: '₹18,000 - ₹55,000' },
  { id: 'n-neet', title: 'NEET UG / AP EAPCET (BiPC)', category: 'Exam', x: 460, y: 250, description: 'Entrance test for MBBS, BDS, B.Pharm, Pharm.D, BSc Nursing, Agriculture.' },
  { id: 'n-bpharm', title: 'B.Pharmacy / Pharm.D', category: 'Degree', x: 680, y: 230, description: 'Degree covering medicinal chemistry, pharmacology, clinical trial protocols, formulation.', duration: '4 Years', avgSalary: '₹4.5 - ₹12 LPA' },
  { id: 'n-skill-pharma', title: 'Clinical Pharmacology & Safety', category: 'Skill', x: 880, y: 230, description: 'Drug safety regulation, clinical trial auditing, adverse event reporting.' },
  { id: 'n-job-clinical', title: 'Clinical Research Associate', category: 'Career', x: 1080, y: 230, description: 'Manage clinical trials for pharmaceutical companies like Dr. Reddy’s, Apollo.', avgSalary: '₹6.0 - ₹18 LPA' },

  // MEC/CEC Pathway
  { id: 'n-mec', title: 'Inter MEC / CEC (Commerce & Econ)', category: 'Stream', x: 260, y: 380, description: '2-Year course for finance, accounting, business administration, chartered accountancy.', duration: '2 Years', costEst: '₹12,000 - ₹40,000' },
  { id: 'n-ca-foundation', title: 'CA Foundation / AP ICET', category: 'Exam', x: 460, y: 380, description: 'National professional exam for Chartered Accountancy & state entrance for MBA/MCA.' },
  { id: 'n-bcom', title: 'B.Com (Computers) / CA', category: 'Degree', x: 680, y: 380, description: 'Financial accounting, auditing, corporate law, tax compliance.', duration: '3 Years', avgSalary: '₹5.0 - ₹16 LPA' },
  { id: 'n-skill-audit', title: 'GST & Corporate Financial Audit', category: 'Skill', x: 880, y: 380, description: 'Financial modeling, Tally Prime, SAP FICO, Income Tax filing.' },
  { id: 'n-job-ca', title: 'Chartered Accountant / Financial Analyst', category: 'Career', x: 1080, y: 380, description: 'Manage corporate audits, tax optimization, investment planning.', avgSalary: '₹9.0 - ₹25 LPA' },

  // Vocational Pathway
  { id: 'n-polytechnic', title: 'Polytechnic Diploma / ITI', category: 'Stream', x: 260, y: 500, description: '3-Year practical engineering diploma after Class 10. Direct entry into industry or Lateral B.Tech.', duration: '3 Years', costEst: '₹6,000 - ₹15,000' },
  { id: 'n-ecet', title: 'AP ECET (Lateral Entry B.Tech)', category: 'Exam', x: 460, y: 500, description: 'State entrance for 2nd year B.Tech direct admission for diploma holders.' },
  { id: 'n-job-technician', title: 'Automation & Hardware Specialist', category: 'Career', x: 1080, y: 500, description: 'Industrial automation, power plant ops, robotics technician.', avgSalary: '₹4.0 - ₹10 LPA' }
];

export const MOCK_GRAPH_EDGES: GraphEdge[] = [
  { from: 'n-class10', to: 'n-mpc', label: 'Math Aptitude' },
  { from: 'n-class10', to: 'n-bipc', label: 'Biology Focus' },
  { from: 'n-class10', to: 'n-mec', label: 'Commerce Interest' },
  { from: 'n-class10', to: 'n-polytechnic', label: 'Hands-on Technical' },

  { from: 'n-mpc', to: 'n-eapcet-engg' },
  { from: 'n-eapcet-engg', to: 'n-btech-cs' },
  { from: 'n-btech-cs', to: 'n-skill-cloud' },
  { from: 'n-skill-cloud', to: 'n-job-ai-engg' },

  { from: 'n-bipc', to: 'n-neet' },
  { from: 'n-neet', to: 'n-bpharm' },
  { from: 'n-bpharm', to: 'n-skill-pharma' },
  { from: 'n-skill-pharma', to: 'n-job-clinical' },

  { from: 'n-mec', to: 'n-ca-foundation' },
  { from: 'n-ca-foundation', to: 'n-bcom' },
  { from: 'n-bcom', to: 'n-skill-audit' },
  { from: 'n-skill-audit', to: 'n-job-ca' },

  { from: 'n-polytechnic', to: 'n-ecet' },
  { from: 'n-ecet', to: 'n-btech-cs', label: 'Lateral Entry' },
  { from: 'n-polytechnic', to: 'n-job-technician', label: 'Direct Placement' }
];

export const MOCK_VIDEOS: VideoLecture[] = [
  {
    id: 'vid-1',
    title: 'Mastering AP EAPCET Physics: Rotational Dynamics & Torque Simplified',
    creatorName: 'Prof. Ramesh Varma (Ex-JNTUK HOD)',
    creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    subject: 'Physics',
    stream: 'Intermediate MPC',
    duration: '24 mins',
    viewsCount: 4250,
    earningsRupees: 3400,
    thumbnailUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=500',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    quizGameId: 'quiz-physics-1',
    summaryNotes: 'Key formulas: τ = r × F, L = Iω. Moment of Inertia of Ring = MR², Solid Cylinder = 1/2 MR².'
  },
  {
    id: 'vid-2',
    title: 'High Yield NEET Biology: Human Endocrine System & Hormone Pathways',
    creatorName: 'Dr. Swapna Reddy (AMC Vizag Alumni)',
    creatorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    subject: 'Biology',
    stream: 'Intermediate BiPC',
    duration: '31 mins',
    viewsCount: 6800,
    earningsRupees: 5440,
    thumbnailUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=500',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    quizGameId: 'quiz-bio-1',
    summaryNotes: 'Pituitary gland control, Insulin vs Glucagon, Thyroid T3/T4 synthesis pathways.'
  },
  {
    id: 'vid-3',
    title: 'Class 10 to Inter MEC: Corporate Accounting & Double Entry System',
    creatorName: 'CA Venkatesh Sharma',
    creatorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    subject: 'Accountancy',
    stream: 'Intermediate MEC',
    duration: '18 mins',
    viewsCount: 2900,
    earningsRupees: 2320,
    thumbnailUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=500',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    quizGameId: 'quiz-account-1',
    summaryNotes: 'Debit what comes in, credit what goes out. Balance sheet equation: Assets = Liabilities + Capital.'
  }
];

export const MOCK_NOTES: NoteModule[] = [
  {
    id: 'note-physics-101',
    subject: 'Physics',
    topic: 'Laws of Motion & Work-Energy Theorem',
    stream: 'Intermediate MPC',
    downloadSizeMb: 4.2,
    isCachedOffline: true,
    standardNotesEnglish: `
# Laws of Motion & Work-Energy Theorem

## 1. Newton's Laws of Motion
- **First Law (Law of Inertia):** An object remains in a state of rest or uniform motion unless acted upon by an external net force.
- **Second Law:** The rate of change of momentum is directly proportional to the applied force: 
  $$\\mathbf{F} = \\frac{d\\mathbf{p}}{dt} = m\\mathbf{a}$$
- **Third Law:** For every action, there is an equal and opposite reaction.

## 2. Work-Energy Theorem
The work done by the net force acting on a particle equals the change in its kinetic energy:
$$W_{net} = \\Delta K = K_f - K_i = \\frac{1}{2}m v_f^2 - \\frac{1}{2}m v_i^2$$

## 3. Friction & Inclined Planes
- Static Friction Limit: $f_s \\le \\mu_s N$
- Kinetic Friction: $f_k = \\mu_k N$
- Acceleration on an inclined plane with friction: $a = g(\\sin\\theta - \\mu \\cos\\theta)$
    `,
    standardNotesTelugu: `
# గమన నియమాలు & పని-శక్తి సిద్ధాంతం

## 1. న్యూటన్ గమన నియమాలు
- **మొదటి నియమం (జడత్వ నియమం):** బాహ్య బలం పనిచేయనంత వరకు వస్తువు నిశ్చల స్థితిలో లేదా సమగమనంలో ఉంటుంది.
- **రెండవ నియమం:** ద్రవ్యవేగ మార్పు రేటు ప్రయోగించిన బలానికి అనులోమానుపాతంలో ఉంటుంది: $F = ma$.
- **మూడవ నియమం:** ప్రతి చర్యకు సమానమైన మరియు వ్యతిరేక ప్రతిచర్య ఉంటుంది.

## 2. పని-శక్తి సిద్ధాంతం
వస్తువుపై పనిచేసిన ఫలిత బలం చేసిన పని, దాని గతిశక్తిలోని మార్పుకు సమానం: $W = \\Delta K = \\frac{1}{2}m(v^2 - u^2)$.
    `,
    passGuaranteeNotesEnglish: {
      coreFormulae: [
        'F = m × a (Force = Mass × Acceleration)',
        'W = F × d × cos(θ) (Work done)',
        'KE = 1/2 m v² (Kinetic Energy)',
        'PE = m g h (Potential Energy)',
        'Work-Energy Theorem: Net Work = Change in KE (W = KE_final - KE_initial)'
      ],
      highWeightageQuestions: [
        'Q1: State Newton’s Second Law and derive F = ma. (Weightage: 4 Marks)',
        'Q2: Prove Work-Energy Theorem for a constant force. (Weightage: 8 Marks)',
        'Q3: Calculate acceleration of 5kg block pulled by 20N force on smooth surface. Ans: a = 20/5 = 4 m/s².'
      ],
      mnemonics: [
        'F-M-A: "Fast Moving Automobiles" (F = m * a)',
        'K-E: "Kick Effort" = 1/2 * m * v squared'
      ],
      quickSummary: 'Pass Guarantee Tip: Memorize F=ma, W=F.d, and KE=1/2 mv². In 8-mark questions, always draw free-body diagrams to secure full step marks!'
    },
    passGuaranteeNotesTelugu: {
      coreFormulae: [
        'బలం F = m × a',
        'పని W = F × d × cos(θ)',
        'గతిశక్తి KE = 1/2 m v²',
        'స్థితిశక్తి PE = m g h'
      ],
      highWeightageQuestions: [
        'ప్రశ్న 1: న్యూటన్ రెండవ నియమాన్ని నిర్వచించి F = ma ని నిరూపించండి (4 మార్కులు)',
        'ప్రశ్న 2: స్థిర బలానికి పని-శక్తి సిద్ధాంతాన్ని రుజువు చేయండి (8 మార్కులు)'
      ],
      mnemonics: [
        'బలం గురుతుంచుకో: బలం = ద్రవ్యరాశి × త్వరణం (F = m * a)'
      ],
      quickSummary: 'పాస్ గ్యారంటీ చిట్కా: F=ma, W=F.d మరియు KE=1/2 mv² సూత్రాలు ఖచ్చితంగా రాయండి. బొమ్మలు (FBD) వేస్తే సగం మార్కులు ఖాయం!'
    }
  },
  {
    id: 'note-bio-102',
    subject: 'Biology',
    topic: 'Human Circulation & Blood Heart Anatomy',
    stream: 'Intermediate BiPC',
    downloadSizeMb: 3.8,
    isCachedOffline: true,
    standardNotesEnglish: `
# Human Circulatory System

## Heart Anatomy & Double Circulation
- **Four Chambers:** Right Atrium, Right Ventricle, Left Atrium, Left Ventricle.
- **Tricuspid Valve:** Between Right Atrium and Right Ventricle.
- **Bicuspid (Mitral) Valve:** Between Left Atrium and Left Ventricle.
- **PACEMAKER:** Sinoatrial Node (SAN) generates action potentials at ~70-75/min.

## Double Circulation Pathways:
1. Pulmonary Circulation: Right Ventricle -> Pulmonary Artery -> Lungs -> Pulmonary Vein -> Left Atrium.
2. Systemic Circulation: Left Ventricle -> Aorta -> Body Tissues -> Vena Cava -> Right Atrium.
    `,
    standardNotesTelugu: `
# మానవ రక్తప్రసరణ వ్యవస్థ

## గుండె నిర్మాణం మరియు ద్వంద్వ ప్రసరణ
- **నాలుగు గదులు:** కుడి కర్ణిక, కుడి జఠరిక, ఎడమ కర్ణిక, ఎడమ జఠరిక.
- **పేస్‌మేకర్:** సినో-అట్రియల్ నోడ్ (SAN) నిమిషానికి 70-75 సార్లు ప్రేరణలను ఉత్పత్తి చేస్తుంది.
- **ద్వంద్వ ప్రసరణ:** ఊపిరితిత్తుల ప్రసరణ మరియు దేహ ప్రసరణ.
    `,
    passGuaranteeNotesEnglish: {
      coreFormulae: [
        'Cardiac Output = Stroke Volume × Heart Rate = 70 mL × 72 bpm = ~5 Liters/min',
        'Blood Pressure = Systolic / Diastolic = 120 / 80 mmHg'
      ],
      highWeightageQuestions: [
        'Q1: Describe the structure of human heart with labelled diagram. (8 Marks)',
        'Q2: Explain why human blood circulation is called Double Circulation. (4 Marks)'
      ],
      mnemonics: [
        'L-B: "Left Bicuspid" (Mitral valve is on Left side)',
        'R-T: "Right Tricuspid" valve'
      ],
      quickSummary: 'Pass Guarantee Tip: Label 4 heart chambers + SAN node in your diagram. SAN node is the natural Pacemaker!'
    },
    passGuaranteeNotesTelugu: {
      coreFormulae: [
        'కార్డియాక్ అవుట్‌పుట్ = స్ట్రోక్ వాల్యూమ్ × గుండె వేగం (70mL × 72 = 5 లీటర్లు/నిమిషం)',
        'సాధారణ బీపీ = 120 / 80 mmHg'
      ],
      highWeightageQuestions: [
        'ప్రశ్న 1: పటం సహాయంతో మానవ గుండె నిర్మాణాన్ని వివరించండి (8 మార్కులు)'
      ],
      mnemonics: [
        'కుడి త్రిపత్ర కవాటం | ఎడమ ద్విపత్ర కవాటం'
      ],
      quickSummary: 'పాస్ గ్యారంటీ చిట్కా: గుండె పటంలో 4 గదులు మరియు సిరలు స్పష్టంగా గుర్తించండి!'
    }
  }
];

export const MOCK_SKILL_TARGETS: SkillGapTarget[] = [
  {
    id: 'target-ai-engineer',
    roleName: 'AI & Data Science Engineer',
    streamCategory: 'Engineering',
    benchmarks: [
      { skillName: 'Python & Data Structures', requiredLevel: 90, category: 'Core Technical' },
      { skillName: 'Machine Learning Frameworks (PyTorch/Scikit)', requiredLevel: 82, category: 'Core Technical' },
      { skillName: 'SQL & Database Architecture', requiredLevel: 78, category: 'Domain Knowledge' },
      { skillName: 'Linear Algebra & Probability', requiredLevel: 85, category: 'Domain Knowledge' },
      { skillName: 'Git Version Control & Deployment', requiredLevel: 75, category: 'Practical / Lab' },
      { skillName: 'Technical Problem Solving & Communication', requiredLevel: 80, category: 'Soft Skills' }
    ]
  },
  {
    id: 'target-clinical-researcher',
    roleName: 'Clinical Data Specialist / Pharmacologist',
    streamCategory: 'Healthcare/Medical',
    benchmarks: [
      { skillName: 'Human Physiology & Anatomy', requiredLevel: 92, category: 'Domain Knowledge' },
      { skillName: 'Medicinal Chemistry & Formulations', requiredLevel: 88, category: 'Core Technical' },
      { skillName: 'Clinical Trial Protocols (GCP)', requiredLevel: 85, category: 'Practical / Lab' },
      { skillName: 'Pharmacovigilance & Drug Safety', requiredLevel: 80, category: 'Practical / Lab' },
      { skillName: 'Biostatistics & SAS Analysis', requiredLevel: 75, category: 'Core Technical' },
      { skillName: 'Medical Ethics & Patient Communication', requiredLevel: 88, category: 'Soft Skills' }
    ]
  },
  {
    id: 'target-ca-auditor',
    roleName: 'Chartered Accountant / Financial Auditor',
    streamCategory: 'Commerce/CA',
    benchmarks: [
      { skillName: 'Financial Accounting & Balance Sheet', requiredLevel: 95, category: 'Core Technical' },
      { skillName: 'GST Compliance & Direct Taxation', requiredLevel: 90, category: 'Domain Knowledge' },
      { skillName: 'Corporate Law & Auditing Standards', requiredLevel: 88, category: 'Domain Knowledge' },
      { skillName: 'Tally Prime & Financial Modeling', requiredLevel: 85, category: 'Practical / Lab' },
      { skillName: 'Commercial Ethics & Client Advisory', requiredLevel: 85, category: 'Soft Skills' }
    ]
  }
];

export const MOCK_COMPANY_INTERVIEWS: CompanyInterviewModule[] = [
  {
    id: 'comp-tcs',
    companyName: 'TCS (Tata Consultancy Services)',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120',
    roleTitle: 'Software Engineer Trainee',
    behavioralQuestions: [
      {
        id: 'tcs-b1',
        question: 'Tell me about a time you faced a difficult deadline during a group project in college.',
        starPrompt: {
          situation: 'Setting: Final semester college mini-project with 3 team members and 5 days remaining.',
          task: 'Goal: Complete the backend integration and UI before final internal review.',
          action: 'Your action: Divided tasks into micro-milestones, prioritized core API functions, worked extra hours.',
          result: 'Outcome: Successfully submitted project on time and scored grade A.'
        },
        sampleAnswer: 'During our 3rd-year web development project, our team lost 2 days due to a database migration bug. As the lead, I organized a quick triage meeting, reassigned UI static tasks to 2 members, while I resolved the SQL schema conflict. We delivered 12 hours ahead of the review with zero bugs.'
      }
    ],
    technicalQuestions: [
      {
        id: 'tcs-t1',
        question: 'What is the difference between Method Overloading and Method Overriding in OOP?',
        keyTopics: ['Polymorphism', 'Compile-time vs Runtime', 'Inheritance'],
        sampleAnswer: 'Method Overloading occurs within the same class where methods share the same name but have different parameter lists (Compile-time polymorphism). Method Overriding occurs when a subclass redefines a method present in the superclass with identical signature (Runtime polymorphism).'
      }
    ]
  },
  {
    id: 'comp-apollo',
    companyName: 'Apollo Hospitals & Clinical Research',
    logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=120',
    roleTitle: 'Clinical Data Specialist & Hospital Executive',
    behavioralQuestions: [
      {
        id: 'apollo-b1',
        question: 'How do you handle an aggressive patient family requesting confidential medical records?',
        starPrompt: {
          situation: 'Setting: Hospital reception during emergency triage.',
          task: 'Goal: De-escalate tension while maintaining HIPAA and Indian Medical Council privacy norms.',
          action: 'Your action: Calmly explained privacy laws, brought duty doctor to counsel family in private room.',
          result: 'Outcome: Patient family felt respected and compliance rules were 100% maintained.'
        },
        sampleAnswer: 'I first acknowledge their anxiety with empathy. I politely clarify that patient privacy laws protect patient safety. I bring in the attending physician to provide a medical update in a private consultation room.'
      }
    ],
    technicalQuestions: [
      {
        id: 'apollo-t1',
        question: 'What are the Phase 1, Phase 2, and Phase 3 clinical trial objectives?',
        keyTopics: ['Drug Discovery', 'Safety Toxicity', 'Efficacy Sample Size'],
        sampleAnswer: 'Phase 1 tests safety and dosage in 20-100 healthy volunteers. Phase 2 evaluates efficacy and side-effects in 100-300 patients. Phase 3 compares efficacy against standard treatments in 1,000-3,000+ patients.'
      }
    ]
  },
  {
    id: 'comp-hdfc',
    companyName: 'HDFC Bank',
    logo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=120',
    roleTitle: 'Credit Analyst & Assistant Manager',
    behavioralQuestions: [
      {
        id: 'hdfc-b1',
        question: 'Describe a situation where you detected an error in a financial report before submission.',
        starPrompt: {
          situation: 'Setting: Auditing mock trial balance sheet during internship.',
          task: 'Goal: Reconcile ₹50,000 discrepancy in debit vs credit columns.',
          action: 'Your action: Re-checked journal entries line by line and discovered a misclassified asset entry.',
          result: 'Outcome: Corrected balance sheet and earned praise from chief auditor.'
        },
        sampleAnswer: 'While analyzing trial balance ledgers during my practical accounting project, I noticed a ₹50,000 discrepancy. I re-scanned transaction vouchers and identified an entry posted to general expense instead of capital expenditure. I corrected the entry before financial signoff.'
      }
    ],
    technicalQuestions: [
      {
        id: 'hdfc-t1',
        question: 'What is Debt Service Coverage Ratio (DSCR) and why is it crucial for loan approvals?',
        keyTopics: ['Corporate Finance', 'Cash Flow', 'Debt Capacity'],
        sampleAnswer: 'DSCR measures a company’s available cash flow to pay current debt obligations. Formula: Net Operating Income / Total Debt Service. A ratio above 1.25 indicates strong ability to service loan interest and principal.'
      }
    ]
  }
];
