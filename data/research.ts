// Edit this file to update your publications and preprints.
export type ResearchItem = {
  id: string;
  title: string;
  venue?: string;
  year?: string;
  description?: string;
  linkUrl?: string;
};

export const researchItems: ResearchItem[] = [

  {
    id: '1',
    title: 'Attention based bidirectional GRU hybrid model for inappropriate content detection in Urdu language',
    venue: 'arXiv preprint',
    year: '2025',
    description: 'Inappropriate and appropriate data collection and preprocessing. Deep learning models for classification of inappropriate text were researched',
    linkUrl: 'https://arxiv.org/abs/2501.09722',
  },
  
  {
    id: '2',
    title: 'Development of a New Tool for Better Imaging of High BMI Patients',
    venue: 'Indian Journal of Science and Technology',
    year: '2018',
    description: 'The purpose was to enhance the image quality of ultrasound of obese patients.Different mathematical models of fat having varied thickness are developed to analyze the response of ultrasound waves propagation through them.The tool used was MATLAB simulink.',
    linkUrl: 'https://indjst.org/articles/development-of-a-new-tool-for-better-imaging-of-high-bmi-patients',
  },

  // Add more publications or preprints here
];
