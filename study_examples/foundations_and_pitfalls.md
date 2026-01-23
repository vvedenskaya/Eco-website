# 📚 Study Guide: Building the Lit Hub Foundation
**Topic:** Modern Web Scaffolding, Bilingual State, and the "Node Modules" Git Trap.

## 🛠 Phase 1: Planning (The Blueprint)
**What we did:** We translated hand-drawn wireframes and a list of specs into a structured `project_plan.md` using **Sprints**.
*   **The Lesson:** Never start coding without a plan. We broke a complex "Help Bot" and "Interactive Map" into later sprints to focus on the **MVP** (Minimum Viable Product) first.

## 🏗 Phase 2: Scaffolding (The Skeleton)
**What we did:** Initialized a Next.js 14 project with TypeScript and Tailwind CSS.
*   **Obstacle:** Security Vulnerabilities.
*   **The Gotcha:** When running `npm install`, we saw critical security warnings. 
*   **Pithy Advice:** Don't ignore `npm audit` warnings in a new project. We immediately updated `package.json` to a patched version of Next.js (`14.2.x`) before writing any more code.

## 🎨 Phase 3: The "Lofi" Design System
**What we did:** Created a custom theme in `tailwind.config.js` and `globals.css`.
*   **Gotcha:** We avoided heavy frameworks. We used simple `border: 1.5px solid` and monospace fonts to achieve the "Lofi" look while keeping the code "Low Data Cost."
*   **Cozy Aesthetic:** By using `radial-gradient` for a "lamp glow" and `repeating-linear-gradient` for "book edges," we created a rich atmospheric feel without using a single image file. This keeps the site under 100kb while feeling "cozy."
*   **Key Concept:** Using **Design Tokens** (like `eden-green`) in your CSS config allows you to change the look of the whole site in one file.

## 🌍 Phase 4: The Bilingual Engine
**What we did:** Implemented a `LanguageContext.tsx` using the **React Context API**.
*   **Obstacle:** `Module not found: Can't resolve '@/context/...'`
*   **The Pitfall:** Next.js uses **Path Aliases** (the `@/` symbol). If your `tsconfig.json` isn't configured correctly to map `@/` to `./src/`, the compiler will fail even if the file exists.
*   **The Fix:** We had to manually add `paths` to `tsconfig.json` to tell TypeScript exactly where to look.

---

## 🚩 The "Nuclear" Obstacle: The Git Trap
This is the most common mistake for juniors and even seniors.

**The Scenario:** We initialized Git but forgot to create a `.gitignore` file before the first commit.
*   **The Result:** Git tried to track the `node_modules` folder (which contains ~20,000+ files and heavy binary files).
*   **The Crash:** GitHub has a **100MB file limit**. A specific Next.js compiler file (`next-swc.node`) was 111MB. GitHub rejected the push.
*   **The Pitfall:** Even after adding `.gitignore`, the large file was already "saved" in Git's history. Simply deleting the file wouldn't work because Git remembers everything.
*   **The "Nuclear" Solution:** Because the project was new, we deleted the hidden `.git` folder (`rm -rf .git`), re-initialized, and did a "Force Push." 
*   **Lesson learned:** **ALWAYS** create your `.gitignore` before your first `git add .`.

---

## 📝 Student Checklist for Future Projects
1.  [ ] **Check Node/NPM versions** before starting.
2.  [ ] **Create `.gitignore`** immediately (include `node_modules` and `.next`).
3.  [ ] **Setup Path Aliases** in `tsconfig.json` for cleaner imports.
4.  [ ] **Secure the version:** Check for high/critical vulnerabilities early.
5.  [ ] **State Management:** Use Context API for global settings like Language or User Auth.
