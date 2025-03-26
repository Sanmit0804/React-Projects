const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Design Homepage UI",
                "description": "Create a responsive homepage layout.",
                "date": "2025-03-26",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix Login Bug",
                "description": "Resolve issue where users cannot log in.",
                "date": "2025-03-27",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Write API Documentation",
                "description": "Document all endpoints for the authentication module.",
                "date": "2025-03-28",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Optimize Database Queries",
                "description": "Improve query efficiency for reports.",
                "date": "2025-03-26",
                "category": "Database",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Deploy Backend Services",
                "description": "Deploy latest backend changes to production.",
                "date": "2025-03-29",
                "category": "DevOps",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Test Payment Gateway",
                "description": "Run test transactions to validate payment flow.",
                "date": "2025-03-30",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Refactor Codebase",
                "description": "Improve code readability and maintainability.",
                "date": "2025-03-26",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Prepare Sprint Report",
                "description": "Summarize sprint progress and blockers.",
                "date": "2025-03-27",
                "category": "Management",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Update UI Components",
                "description": "Ensure UI components match new design system.",
                "date": "2025-03-29",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Review Pull Requests",
                "description": "Check code quality and merge approved PRs.",
                "date": "2025-03-26",
                "category": "Code Review",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Setup CI/CD Pipeline",
                "description": "Automate build and deployment process.",
                "date": "2025-03-28",
                "category": "DevOps",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Conduct User Interviews",
                "description": "Gather feedback on new feature prototypes.",
                "date": "2025-03-30",
                "category": "User Research",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Monitor Server Logs",
                "description": "Identify and resolve system errors.",
                "date": "2025-03-26",
                "category": "System Monitoring",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Implement Security Patches",
                "description": "Apply latest security updates to the server.",
                "date": "2025-03-27",
                "category": "Security",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Improve Page Load Speed",
                "description": "Optimize assets and scripts for better performance.",
                "date": "2025-03-29",
                "category": "Performance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export function setLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export function getLocalStorage() {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { admin, employees };
}