# Career Page

 
Welcome to the Career Page platform! This application allows users to register, log in, and apply for specific job roles. Additionally, HR professionals have special access to post jobs, manage applications, and update statuses.

URL: https://career-one-dun.vercel.app

It is now deployed on Vercel. If the link doesn't open in Chrome, please try it in Mozilla Firefox or any other browser.


# Demo Accound Details 
For Role : HR
**email:clicksagnikbiswas01@gmail.com**
**password:123456789**

For Role : User (default)
**email:click@gmail.com**
**password:123456789**



## Features

### 1. Login User

- **Users** can log in to view and apply for job roles, and manage their application status.
- **HR** can log in to manage job postings, view applications, and update the status of applications.

**To log in:**
1. Go to the **Login** page.
2. Enter your **Email** and **Password**.
3. Click the **Login** button.

If you don't have an account, please proceed to the **Register User** section.

### 2. Register User

Users can create an account to apply for jobs and manage their application history.

**To register:**
1. Go to the **Signup** page.
2. Fill in the required details:
    
    - **Email**
    - **Password**
3. Click the **Sign up** button.

Once registered, you can log in and start applying for jobs!

### 3. Apply for a Specific Job Role

After logging in, you can browse job listings and apply for the roles that interest you.

**To apply for a job role:**
1. Browse the list of available job roles.
2. Select the job role you wish to apply for.
3. Click the **Apply** button.
4. You will be able to track the status of your application through your account.

### User Role: `user` (default)

As a **user**, you have access to:
- **Create an account** and **Login**.
- **Apply** for job roles.
- **View your application history** and track the status of your job applications.
- **Stay updated** with the latest application status (Accepted, Rejected, etc.).

### HR Role: `hr`

As an **HR** professional, you have additional access to:
1. **Post new job roles** to attract potential candidates.
   - Specify the job title, description, requirements, and other relevant details.
2. **Update the status** of applicants.
   - Change application statuses (e.g., under review, accepted, rejected).
3. **Delete job postings** when they are no longer relevant or the position is filled.
4. **View applications** for job postings.
   - Review applications submitted by users for each job.
5. **Edit application status** if needed.
   - Modify the status of a candidate’s application.
6. **Delete applications** if required.
   - Remove a candidate's application from the system.

## Summary of Roles and Permissions

| Action                                | User Role (Default) | HR Role           |
|---------------------------------------|---------------------|-------------------|
| Create Account                        | Yes                 | Yes               |
| Login Account                         | Yes                 | Yes               |
| Apply for Job Role                    | Yes                 | No                |
| View Application History              | Yes                 | No                |
| Post New Job                          | No                  | Yes               |
| Update Job Application Status        | No                  | Yes               |
| Delete Job Post                       | No                  | Yes               |
| View Applications                     | No                  | Yes               |
| Edit Application Status               | No                  | Yes               |
| Delete Applications                   | No                  | Yes               |

## Getting Started

To start using the career page, follow these steps:

1. **Register** a user or HR account.
2. If you’re a **user**, log in and browse available job roles.
3. If you’re **HR**, log in to manage job postings and applications.

## Technologies Used

- **Frontend:** React, Redux
- **Backend:** Node.js, Express 
- **Database:** MongoDB
- **CV Sturage** S3 (aws)



By Sagnik Biswas

