/*
|--------------------------------------------------------------------------
| Personal Info
|--------------------------------------------------------------------------
*/
export interface ResumePersonalInfo {
  is_visible?: boolean;
  data?: {
    full_name?: string;
    email_address?: string;
    phone_number?: string;
    location?: string;
    linkedin_profile?: string;
    website_portfolio?: string;
  };
}

/*
|--------------------------------------------------------------------------
| Professional Summary
|--------------------------------------------------------------------------
*/
export interface ResumeProfessionalSummary {
  is_visible?: boolean;
  summary_text?: string;
}

/*
|--------------------------------------------------------------------------
| Experience
|--------------------------------------------------------------------------
*/

export interface ResumeExperienceItem {
  id?: string;
  is_visible?: boolean;
  company_name?: string;
  position?: string;
  start_month?: string;
  start_year?: string;
  end_month?: string;
  end_year?: string;
  is_current?: boolean;
  location?: string;
  website?: string;
  summary?: string;
}

export interface ResumeExperience {
  is_visible?: boolean;
  jobs?: ResumeExperienceItem[];
  internships?: ResumeExperienceItem[];
}

/*
|--------------------------------------------------------------------------
| Certifications
|--------------------------------------------------------------------------
*/

export interface ResumeCertificationItem {
  id?: string;
  is_visible?: boolean;
  certification_name?: string;
  issuing_organization?: string;
  issue_month?: string;
  issue_year?: string;
  expiration_month?: string;
  expiration_year?: string;
  does_not_expire?: boolean;
  location?: string;
  credential_id?: string;
  credential_url?: string;
  summary?: string;
}

export interface ResumeCertifications {
  is_visible?: boolean;
  items?: ResumeCertificationItem[];
}

/*
|--------------------------------------------------------------------------
| Education
|--------------------------------------------------------------------------
*/

export interface ResumeEducationItem {
  id?: string;
  is_visible?: boolean;
  school_university?: string;
  degree?: string;
  city?: string;
  marks_type?: string;
  marks?: string;
  start_month?: string;
  start_year?: string;
  end_month?: string;
  end_year?: string;
  is_current?: boolean;
  description?: string;
}

export interface ResumeEducation {
  is_visible?: boolean;
  items?: ResumeEducationItem[];
}

/*
|--------------------------------------------------------------------------
| Skills
|--------------------------------------------------------------------------
*/

export interface ResumeSkillItem {
  id?: string;
  is_visible?: boolean;
  skill_name?: string;
}

export interface ResumeSkillCategory {
  id?: string;
  is_visible?: boolean;
  category_name?: string;
  skills?: ResumeSkillItem[];
}

export interface ResumeSkills {
  is_visible?: boolean;
  categories?: ResumeSkillCategory[];
}

/*
|--------------------------------------------------------------------------
| Social Links
|--------------------------------------------------------------------------
*/

export interface ResumeSocialLinkItem {
  id?: string;
  is_visible?: boolean;
  label?: string;
  url?: string;
}

export interface ResumeSocialLinks {
  is_visible?: boolean;
  links?: ResumeSocialLinkItem[];
}

/*
|--------------------------------------------------------------------------
| Hobbies
|--------------------------------------------------------------------------
*/

export interface ResumeHobbies {
  is_visible?: boolean;
  hobbies_and_interests?: string;
}

/*
|--------------------------------------------------------------------------
| Projects
|--------------------------------------------------------------------------
*/

export interface ResumeProjectItem {
  id?: string;
  is_visible?: boolean;
  project_title?: string;
  project_description?: string;
  date_or_date_range?: string;
  location?: string;
  project_link?: string;
  summary?: string;
  technologies_used?: string[];
  keywords?: string[];
}

/*
|--------------------------------------------------------------------------
| Languages
|--------------------------------------------------------------------------
*/

export interface ResumeLanguageItem {
  id?: string;
  is_visible?: boolean;
  language_name?: string;
  proficiency_level?: string;
}

/*
|--------------------------------------------------------------------------
| Custom Sections
|--------------------------------------------------------------------------
*/

export interface ResumeCustomSectionItem {
  id?: string;
  is_visible?: boolean;
  name?: string;
  description?: string;
  date_or_date_range?: string;
  location?: string;
  website?: string;
  summary?: string;
  keywords?: string[];
}

export interface ResumeCustomSections {
  is_visible?: boolean;
  items?: ResumeCustomSectionItem[];
}

/*
|--------------------------------------------------------------------------
| Additional Sections
|--------------------------------------------------------------------------
*/

export interface ResumeAdditionalSections {
  is_visible?: boolean;
  projects?: ResumeProjectItem[];
  languages?: ResumeLanguageItem[];
  custom_sections?: ResumeCustomSections;
}
