# 📘 DCS PLM - Comprehensive Technical Manual

## 📌 1. Project Overview & Vision
DCS PLM is a state-of-the-art digital ecosystem built to serve as the unified bridge between industrial consulting, professional training (LMS), and corporate communication. It is designed with a "Premium-First" philosophy, where visual excellence meets high-performance engineering.

### Core Objectives:
- **Educational Empowerment**: Providing a structured LMS for clinical and pharmaceutical research.
- **Service Transparency**: Detail-oriented presentation of specialized consulting services (Clinical Research, Aerospace, Pharma).
- **Corporate Agility**: Integrated CMS for blogs, job postings, and career growth management.

---

## 🛠️ 2. Deep Dive: The Tech Stack

### Core Framework & Language
- **Next.js 14.1.0 (App Router)**: Utilizing Server-side Rendering (SSR) for SEO-sensitive pages and Client-side Rendering (CSR) for interactive dashboards.
- **TypeScript 5.3**: Strict typing across data models and component props to prevent runtime errors.

### Data & Authentication
- **Mocked Data Layer**: The project currently uses mocked data for all entities (Courses, Blogs, Jobs, etc.) for demonstration and initial presentation purposes.
- **PostgreSQL (Optional)**: While the infrastructure is ready for PostgreSQL, the current implementation uses in-memory or static mock data in server actions.
- **NextAuth.js v5 Beta**: Implements a session-based auth system. Uses a custom `auth.config.ts` for callbacks during the login flow.

### UI / UX Architecture
- **Tailwind CSS**: Custom configuration (`tailwind.config.ts`) includes extended color palettes and animation keyframes.
- **Framer Motion**: Handles complex entrance animations and state transitions for a "smooth" feel.
- **Radix UI**: Form primitive components (via Shadcn) ensuring WCAG accessibility compliance.
- **Swiper.js**: Used for full-width landing page hero carousels and testimonial sliders.

---

## 🏛️ 3. Architecture & Routing System

### Route Groups `(src/app)`
Next.js route groups are used to categorize pages without affecting the path. This keeps the folder structure clean:
- **`(careers)`**: `careers-at-dcs`, `join-us`, `hire-from-us`. Uses a shared job application modal.
- **`(education)`**: `courses`, `learn`. These handle the LMS viewing and participation.
- **`(services)`**: 13+ specialized folders (e.g., `drug-discovery-development`) each containing a dedicated `page.tsx`.
- **`(tech)`**: Specialized technical service pages.

### Middleware & Route Protection
The `middleware.ts` file acts as the primary gatekeeper:
1.  **Public Access**: Routes listed in `routes.ts` (home, about, blogs) are open to all.
2.  **Auth Redirect**: Logged-in users attempting to access `/login` or `/register` are redirected to `/dashboard`.
3.  **Role Protection**: Admin routes (anything under `/admin`) require the User object to have `role === 'ADMIN'`.

---

## 🚀 4. Technical Feature Deep Dives

### 📚 Learning Management System (LMS)
The LMS is the "heart" of the platform.
- **Hierarchy**: `Course` -> `Chapter` -> `Lesson`.
- **Progress Tracking**: The `UserProgress` model records when a lesson is marked as complete.
- **Enrollment Flow**: Handled by `src/actions/enroll.ts`, ensuring students cannot double-enroll and are redirected correctly.
- **Certificates**: Automatically generated using a unique `certificateNo` format and tied to specific course completions.

### ✍️ Content Management System (CMS)
- **Blog Engine**: Supports Markdown via `react-markdown` and `remark-gfm`. 
- **Interactions**: Public users can "Like" blog posts (handled by `incrementLikes` server action) and leave comments.
- **Admin Control**: Admins can approve/delete comments and toggle a blog's `isPublished` or `isFeatured` flag.

### 💼 Career Hub
- **Job Search**: Dynamic filtering of job postings.
- **Applications**: Handles PDF resume uploads via the `FileUpload.tsx` component (integrated with Cloudinary).
- **Status Tracking**: Positions applications through statuses: `RECEIVED` -> `REVIEWED` -> `SHORTLISTED` -> `REJECTED`.

---

## 💾 5. Data Management

The system is designed with a highly relational model in mind (User, Course, Chapter, Lesson, UserProgress, etc.), which is currently mocked in `src/actions/` to ensure visual excellence without the complexity of a live database.

---

## ⚙️ 6. All Server Actions: The Logic Layer

Located in `src/actions/`, these functions are the "Backend" of our Next.js app:
| Action File | Purpose | Key Functionality |
| :--- | :--- | :--- |
| `admin-users.ts` | User Mgmt | Mocked tool to manage, delete, or promote users. |
| `course.ts` | Course CRUD | Mocked validation and publishing logic. |
| `blog.ts` | CMS Engine | Mocked slug check, tag management, view count increments. |
| `enroll.ts` | Student Flow | Mocked student participation flow. |
| `user-progress.ts`| Progress | Mocked completion status of lessons for an active user. |

---

## 🎨 7. Design System & Global Layout

### Global Providers (`src/components/providers/`)
- **`AuthProvider`**: Manages the NextAuth session state.
- **`ConfettiProvider`**: Triggers celebration animations when a user completes a course or milestone.
- **`ToastProvider`**: (via `react-hot-toast`) provides immediate UI feedback for success/error states.

### Styling Standards
- **Premium Glows**: Custom utility classes for `glassmorphism` and `neon-border`.
- **Typography**: `Sora` for headings (Premium feel) and `Inter` for body text (Readability).

---

## 🚀 8. Development & Deployment

### Environment Variables Structure:
```env
DATABASE_URL=""     # Optional: Primary DB connection
DIRECT_URL=""       # Optional: Direct connection
AUTH_SECRET=""      # NextAuth encryption key
CLOUDINARY_CLOUD_NAME="" # Image Hosting
CLOUDINARY_API_KEY=""    # Image API
RESEND_API_KEY=""   # Email Engine
```

### Critical Scripts:
- `npm run dev`: Starts the local development environment with HMR.
- `npm run build`: Production-ready bundle optimization.

### Production Considerations:
- **Build Optimization**: Uses `next.config.js` to handle image domains (Cloudinary) and experimental features if any.
- **Mock Data Persistence**: Changes to data are local and will reset when the server restarts or as per Next.js cache settings.
