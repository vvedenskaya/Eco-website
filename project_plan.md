# Lit Hub / StewardWorks Project Plan

## Project Overview
**Client:** StewardWorks / Nureaum
**Core Objective:** A lofi, low-data-cost educational portal for workforce roadmapping and learning objectives.
**Design Tone:** Simple, Inviting, Lofi.

---

## MVP Strategy: "The Onboarding & Hub"
The simplest MVP focus is to get users through the onboarding flow (Pages 0-3) and into the **Information/Helpdesk (Page 5)** which serves as the primary navigation hub. 
*   **Postpone:** Interactive TTS, AI Help Bot, and Content Compressor (Sprints 4+).
*   **Simplify:** Use standard browser-based file uploads and static roadmap graphics before building the interactive map.

---

## Subprojects
1.  **Project Portal (Frontend):** React/Next.js (optimized for low bandwidth).
2.  **User Identity System:** Profile management, onboarding data, and legal acceptance.
3.  **Content Engine:** Markdown-based lesson rendering and image/video handling.
4.  **Learning Tools (LMS Lite):** Quizzes, assignments, and the roadmap pillar system.
5.  **Media Services:** TTS integration, file compression, and cloud storage.

---

## Sprint Roadmap

### Sprint 1: Foundation & Entry (Page 0 & 1)
*Focus: Landing experience and language accessibility.*
*   **Subproject:** Project Portal
*   **Tasks:**
    *   Set up repository and deployment pipeline.
    *   **Page 0 (Pre-Home):** Implement logo, mission phrase, and "Enter" button.
    *   **Page 1 (Onboarding Language):** Implement English/Spanish selection logic and bilingual state management.
    *   **Design:** Implement "Lofi" CSS framework (low asset weight).

### Sprint 2: Profile & Compliance (Page 2 & 3)
*Focus: User data collection and legal sign-off.*
*   **Subproject:** User Identity System
*   **Tasks:**
    *   **Page 2 (Onboarding Questions):** Build the multi-step form (Photo upload, MCQ for residency, text fields for learner type/dream job).
    *   **Page 3 (Legal Notice):** Implement the signature field/acceptance button.
    *   **Storage:** Secure saving of profile data to cloud DB.

### Sprint 3: The Hub & Helpdesk (Page 5)
*Focus: Creating the "Home" experience.*
*   **Subproject:** Project Portal / Content Engine
*   **Tasks:**
    *   **Page 5 (Info/Helpdesk):** Implement the split-pane layout (Topics on left, content on right).
    *   **Calendar Component:** Basic integration with accessible calendars.
    *   **Navigation:** Link logo to return to this "Home" page.

### Sprint 4: Career Roadmap & Pillars (Page 4)
*Focus: Visualizing the transition into environmental work.*
*   **Subproject:** Career & Skill Development
*   **Tasks:**
    *   **Page 4 (Learning Objectives):** Build the "Three Tiered Pillars" visualization specifically for career milestones.
    *   **Workforce Roadmap:** Implementation of the interactive map/graphic showing the path from current skills to Eco-job placement.
    *   **Job Milestones:** Display of learning outcomes as "Job Ready" badges or achievements.

### Sprint 5: Educational Tools & Media
*Focus: Interactive features and accessibility.*
*   **Subproject:** Media Services / Learning Tools
*   **Tasks:**
    *   **Text Reader:** Integrate basic English/Spanish Text-to-Speech (browser API for low data).
    *   **Video Player:** Custom lofi video player sub-project.
    *   **Quizzes:** Step-by-step Q&A module.
    *   **Notes:** Interactive note-taking for users.

### Sprint 6: Teacher Admin & Optimization
*Focus: Scalability and batch operations.*
*   **Subproject:** Learning Tools / Media Services
*   **Tasks:**
    *   **Assignment Manager:** Teacher-facing interface for grading/notes.
    *   **Content Exporter/Compressor:** Automated tools for low-data asset delivery.
    *   **Batch Export:** Functionality for exporting user data/assignments.

---

## Clarifying Questions
1.  **Original Creation Access:** Given this is for job seeking, does this refer to a **Resume/Portfolio builder** or a way for users to create and share their own environmental projects?
2.  **Interactive Map:** Is the "Workforce Roadmap" map intended to be a geographic map of local job openings/training centers, or a logical flowchart of career steps?
3.  **Authentication:** For the "Save by email" feature, are you looking for a traditional password system or a simpler "Magic Link" sent to their inbox?
4.  **Job Data:** Will the environmental job listings/roadmap data be curated manually by the teacher/admin, or do we need to pull from external job boards?
5.  **Offline Use:** Given the "Low data cost" requirement, is offline accessibility (PWA) a priority for users who might be in areas with poor connectivity?
