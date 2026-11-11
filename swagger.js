const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Youth Tiger Soccer School API',
            version: '1.0.0',
            description: 'REST API documentation for Youth Tiger Soccer School backend',
            contact: {
                name: 'Youth Tiger Soccer School',
            },
        },
        servers: [
            {
                url: process.env.BASE_URL || 'http://localhost:3000',
                description: 'Server',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {
                // ── Student ──────────────────────────────────────────────
                Student: {
                    type: 'object',
                    properties: {
                        reg_id_student: { type: 'integer', example: 1 },
                        id_student: { type: 'string', example: 'YRA1222' },
                        name: { type: 'string', example: 'Yaqdhan Rakha Assaid' },
                        date_birth: { type: 'string', format: 'date', example: '2013-05-10' },
                        gender: { type: 'string', enum: ['L', 'P'], example: 'L' },
                        photo: { type: 'string', example: 'uploads/image/photo.jpg' },
                        email: { type: 'string', format: 'email', example: 'student@example.com' },
                        nohp: { type: 'string', example: '08123456789' },
                        registration_date: { type: 'string', format: 'date', example: '2022-12-24' },
                        status: { type: 'integer', example: 1 },
                        position: { type: 'string', example: 'Striker' },
                        assigned_by_coach: { type: 'integer', example: 1 },
                    },
                },
                // ── Management ───────────────────────────────────────────
                Management: {
                    type: 'object',
                    properties: {
                        id_management: { type: 'integer', example: 1 },
                        name: { type: 'string', example: 'Admin Name' },
                        email: { type: 'string', format: 'email', example: 'admin@example.com' },
                        photo: { type: 'string', example: 'uploads/image/photo.jpg' },
                        role: { type: 'string', example: 'admin' },
                    },
                },
                // ── Coach ────────────────────────────────────────────────
                Coach: {
                    type: 'object',
                    properties: {
                        id_coach: { type: 'integer', example: 1 },
                        name: { type: 'string', example: 'Coach Name' },
                        email: { type: 'string', format: 'email', example: 'coach@example.com' },
                        photo: { type: 'string', example: 'uploads/image/photo.jpg' },
                        nohp: { type: 'string', example: '08123456789' },
                    },
                },
                // ── Aspect ───────────────────────────────────────────────
                Aspect: {
                    type: 'object',
                    properties: {
                        id_aspect: { type: 'integer', example: 1 },
                        aspect_name: { type: 'string', example: 'Teknik Dasar' },
                    },
                },
                // ── AspectSub ────────────────────────────────────────────
                AspectSub: {
                    type: 'object',
                    properties: {
                        id_aspect_sub: { type: 'integer', example: 1 },
                        id_aspect: { type: 'integer', example: 1 },
                        aspect_sub_name: { type: 'string', example: 'Dribbling' },
                    },
                },
                // ── AssessmentSetting ─────────────────────────────────
                AssessmentSetting: {
                    type: 'object',
                    properties: {
                        id_assessment_setting: { type: 'integer', example: 1 },
                        setting_name: { type: 'string', example: 'Penilaian Semester 1' },
                        start_date: { type: 'string', format: 'date', example: '2024-01-01' },
                        end_date: { type: 'string', format: 'date', example: '2024-06-30' },
                    },
                },
                // ── Assessment ───────────────────────────────────────────
                Assessment: {
                    type: 'object',
                    properties: {
                        id_assessment: { type: 'integer', example: 1 },
                        id_student: { type: 'string', example: 'YRA1222' },
                        id_aspect_sub: { type: 'integer', example: 1 },
                        id_assessment_setting: { type: 'integer', example: 1 },
                        score: { type: 'number', example: 85 },
                        notes: { type: 'string', example: 'Good performance' },
                    },
                },
                // ── Schedule ─────────────────────────────────────────────
                Schedule: {
                    type: 'object',
                    properties: {
                        id_schedule: { type: 'integer', example: 1 },
                        day: { type: 'string', example: 'Senin' },
                        time_start: { type: 'string', example: '08:00' },
                        time_end: { type: 'string', example: '10:00' },
                        location: { type: 'string', example: 'Lapangan A' },
                    },
                },
                // ── PointRate ────────────────────────────────────────────
                PointRate: {
                    type: 'object',
                    properties: {
                        id_poinrate: { type: 'integer', example: 1 },
                        min_score: { type: 'number', example: 0 },
                        max_score: { type: 'number', example: 100 },
                        grade: { type: 'string', example: 'A' },
                        description: { type: 'string', example: 'Sangat Baik' },
                    },
                },
                // ── Departement ──────────────────────────────────────────
                Departement: {
                    type: 'object',
                    properties: {
                        id_departement: { type: 'integer', example: 1 },
                        departement_name: { type: 'string', example: 'U-12' },
                    },
                },
                // ── Information ──────────────────────────────────────────
                Information: {
                    type: 'object',
                    properties: {
                        id_information: { type: 'integer', example: 1 },
                        title: { type: 'string', example: 'Jadwal Latihan' },
                        content: { type: 'string', example: 'Latihan dilaksanakan setiap Senin pukul 08.00' },
                        date: { type: 'string', format: 'date', example: '2024-01-01' },
                    },
                },
                // ── Generic Responses ────────────────────────────────────
                LoginRequest: {
                    type: 'object',
                    required: ['email', 'password'],
                    properties: {
                        email: { type: 'string', format: 'email', example: 'user@example.com' },
                        password: { type: 'string', format: 'password', example: 'password123' },
                    },
                },
                LoginResponse: {
                    type: 'object',
                    properties: {
                        token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
                        message: { type: 'string', example: 'Login successful' },
                    },
                },
                ErrorResponse: {
                    type: 'object',
                    properties: {
                        error: { type: 'string', example: 'Something went wrong!' },
                    },
                },
                SuccessResponse: {
                    type: 'object',
                    properties: {
                        message: { type: 'string', example: 'Operation successful' },
                    },
                },
            },
        },
        tags: [
            { name: 'Student', description: 'Endpoints for managing students' },
            { name: 'Management', description: 'Endpoints for managing admin/management users' },
            { name: 'Coach', description: 'Endpoints for managing coaches' },
            { name: 'Aspect', description: 'Endpoints for managing assessment aspects' },
            { name: 'AspectSub', description: 'Endpoints for managing aspect sub-categories' },
            { name: 'AssessmentSetting', description: 'Endpoints for managing assessment settings' },
            { name: 'Assessment', description: 'Endpoints for managing student assessments' },
            { name: 'Schedule', description: 'Endpoints for managing training schedules' },
            { name: 'PointRate', description: 'Endpoints for managing point/grade rates' },
            { name: 'Departement', description: 'Endpoints for managing departements/age groups' },
            { name: 'Information', description: 'Endpoints for managing school information/announcements' },
        ],
        paths: {
            // ════════════════════════════════════════════════════════════
            //  STUDENT
            // ════════════════════════════════════════════════════════════
            '/api/student': {
                get: {
                    tags: ['Student'],
                    summary: 'Get all students',
                    responses: {
                        200: { description: 'List of students', content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Student' } } } } },
                        500: { description: 'Server error', content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } } },
                    },
                },
                post: {
                    tags: ['Student'],
                    summary: 'Create a new student',
                    requestBody: {
                        required: true,
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: 'object',
                                    required: ['id_student', 'name', 'date_birth', 'gender', 'email'],
                                    properties: {
                                        id_student: { type: 'string', example: 'YRA1222' },
                                        name: { type: 'string', example: 'Yaqdhan Rakha Assaid' },
                                        date_birth: { type: 'string', format: 'date', example: '2013-05-10' },
                                        gender: { type: 'string', enum: ['L', 'P'] },
                                        email: { type: 'string', format: 'email' },
                                        nohp: { type: 'string' },
                                        position: { type: 'string' },
                                        photo: { type: 'string', format: 'binary' },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        201: { description: 'Student created', content: { 'application/json': { schema: { $ref: '#/components/schemas/Student' } } } },
                        500: { description: 'Server error' },
                    },
                },
            },
            '/api/student/login': {
                post: {
                    tags: ['Student'],
                    summary: 'Student login',
                    requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/LoginRequest' } } } },
                    responses: {
                        200: { description: 'Login successful', content: { 'application/json': { schema: { $ref: '#/components/schemas/LoginResponse' } } } },
                        401: { description: 'Invalid credentials' },
                    },
                },
            },
            '/api/student/{id_student}': {
                get: {
                    tags: ['Student'],
                    summary: 'Get student by ID',
                    parameters: [{ name: 'id_student', in: 'path', required: true, schema: { type: 'string' }, example: 'YRA1222' }],
                    responses: {
                        200: { description: 'Student found', content: { 'application/json': { schema: { $ref: '#/components/schemas/Student' } } } },
                        404: { description: 'Student not found' },
                    },
                },
                put: {
                    tags: ['Student'],
                    summary: 'Update student',
                    parameters: [{ name: 'id_student', in: 'path', required: true, schema: { type: 'string' } }],
                    requestBody: {
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        name: { type: 'string' },
                                        date_birth: { type: 'string', format: 'date' },
                                        gender: { type: 'string', enum: ['L', 'P'] },
                                        email: { type: 'string', format: 'email' },
                                        nohp: { type: 'string' },
                                        position: { type: 'string' },
                                        photo: { type: 'string', format: 'binary' },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        200: { description: 'Student updated' },
                        404: { description: 'Student not found' },
                    },
                },
                delete: {
                    tags: ['Student'],
                    summary: 'Delete student',
                    parameters: [{ name: 'id_student', in: 'path', required: true, schema: { type: 'string' } }],
                    responses: {
                        200: { description: 'Student deleted' },
                        404: { description: 'Student not found' },
                    },
                },
            },
            '/api/student/logout/{id_student}': {
                post: {
                    tags: ['Student'],
                    summary: 'Student logout',
                    parameters: [{ name: 'id_student', in: 'path', required: true, schema: { type: 'string' } }],
                    responses: { 200: { description: 'Logged out successfully' } },
                },
            },

            // ════════════════════════════════════════════════════════════
            //  MANAGEMENT
            // ════════════════════════════════════════════════════════════
            '/api/management': {
                get: { tags: ['Management'], summary: 'Get all management records', responses: { 200: { description: 'List', content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Management' } } } } } } },
                post: {
                    tags: ['Management'],
                    summary: 'Create management record',
                    requestBody: { required: true, content: { 'multipart/form-data': { schema: { type: 'object', properties: { name: { type: 'string' }, email: { type: 'string', format: 'email' }, password: { type: 'string', format: 'password' }, role: { type: 'string' }, photo: { type: 'string', format: 'binary' } } } } } },
                    responses: { 201: { description: 'Created' }, 500: { description: 'Server error' } },
                },
            },
            '/api/management/login': {
                post: { tags: ['Management'], summary: 'Management login', requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/LoginRequest' } } } }, responses: { 200: { description: 'Login successful', content: { 'application/json': { schema: { $ref: '#/components/schemas/LoginResponse' } } } }, 401: { description: 'Invalid credentials' } } },
            },
            '/api/management/{id_management}': {
                get: { tags: ['Management'], summary: 'Get management by ID', parameters: [{ name: 'id_management', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Found', content: { 'application/json': { schema: { $ref: '#/components/schemas/Management' } } } }, 404: { description: 'Not found' } } },
                put: { tags: ['Management'], summary: 'Update management record', parameters: [{ name: 'id_management', in: 'path', required: true, schema: { type: 'integer' } }], requestBody: { content: { 'multipart/form-data': { schema: { type: 'object', properties: { name: { type: 'string' }, email: { type: 'string' }, photo: { type: 'string', format: 'binary' } } } } } }, responses: { 200: { description: 'Updated' } } },
                delete: { tags: ['Management'], summary: 'Delete management record', parameters: [{ name: 'id_management', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Deleted' } } },
            },
            '/api/management/logout/{id_management}': {
                post: { tags: ['Management'], summary: 'Management logout', parameters: [{ name: 'id_management', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Logged out' } } },
            },

            // ════════════════════════════════════════════════════════════
            //  COACH
            // ════════════════════════════════════════════════════════════
            '/api/coach': {
                get: { tags: ['Coach'], summary: 'Get all coaches', responses: { 200: { description: 'List', content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Coach' } } } } } } },
                post: { tags: ['Coach'], summary: 'Create coach', requestBody: { required: true, content: { 'multipart/form-data': { schema: { type: 'object', properties: { name: { type: 'string' }, email: { type: 'string', format: 'email' }, password: { type: 'string', format: 'password' }, nohp: { type: 'string' }, photo: { type: 'string', format: 'binary' } } } } } }, responses: { 201: { description: 'Created' } } },
            },
            '/api/coach/login': {
                post: { tags: ['Coach'], summary: 'Coach login', requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/LoginRequest' } } } }, responses: { 200: { description: 'Login successful', content: { 'application/json': { schema: { $ref: '#/components/schemas/LoginResponse' } } } } } },
            },
            '/api/coach/{id_coach}': {
                get: { tags: ['Coach'], summary: 'Get coach by ID', parameters: [{ name: 'id_coach', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Found', content: { 'application/json': { schema: { $ref: '#/components/schemas/Coach' } } } } } },
                put: { tags: ['Coach'], summary: 'Update coach', parameters: [{ name: 'id_coach', in: 'path', required: true, schema: { type: 'integer' } }], requestBody: { content: { 'multipart/form-data': { schema: { type: 'object', properties: { name: { type: 'string' }, email: { type: 'string' }, photo: { type: 'string', format: 'binary' } } } } } }, responses: { 200: { description: 'Updated' } } },
                delete: { tags: ['Coach'], summary: 'Delete coach', parameters: [{ name: 'id_coach', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Deleted' } } },
            },
            '/api/coach/logout/{id_coach}': {
                post: { tags: ['Coach'], summary: 'Coach logout', parameters: [{ name: 'id_coach', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Logged out' } } },
            },

            // ════════════════════════════════════════════════════════════
            //  ASPECT
            // ════════════════════════════════════════════════════════════
            '/api/aspect': {
                get: { tags: ['Aspect'], summary: 'Get all aspects', responses: { 200: { description: 'List', content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Aspect' } } } } } } },
                post: { tags: ['Aspect'], summary: 'Create aspect', requestBody: { required: true, content: { 'application/json': { schema: { type: 'object', required: ['aspect_name'], properties: { aspect_name: { type: 'string', example: 'Teknik Dasar' } } } } } }, responses: { 201: { description: 'Created' } } },
            },
            '/api/aspect/{id_aspect}': {
                get: { tags: ['Aspect'], summary: 'Get aspect by ID', parameters: [{ name: 'id_aspect', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Found' } } },
                put: { tags: ['Aspect'], summary: 'Update aspect', parameters: [{ name: 'id_aspect', in: 'path', required: true, schema: { type: 'integer' } }], requestBody: { content: { 'application/json': { schema: { type: 'object', properties: { aspect_name: { type: 'string' } } } } } }, responses: { 200: { description: 'Updated' } } },
                delete: { tags: ['Aspect'], summary: 'Delete aspect', parameters: [{ name: 'id_aspect', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Deleted' } } },
            },

            // ════════════════════════════════════════════════════════════
            //  ASPECT SUB
            // ════════════════════════════════════════════════════════════
            '/api/aspect_sub': {
                get: { tags: ['AspectSub'], summary: 'Get all aspect subs', responses: { 200: { description: 'List', content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/AspectSub' } } } } } } },
                post: { tags: ['AspectSub'], summary: 'Create aspect sub', requestBody: { required: true, content: { 'application/json': { schema: { type: 'object', required: ['id_aspect', 'aspect_sub_name'], properties: { id_aspect: { type: 'integer' }, aspect_sub_name: { type: 'string', example: 'Dribbling' } } } } } }, responses: { 201: { description: 'Created' } } },
            },
            '/api/aspect_sub/{id_aspect_sub}': {
                get: { tags: ['AspectSub'], summary: 'Get aspect sub by ID', parameters: [{ name: 'id_aspect_sub', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Found' } } },
                put: { tags: ['AspectSub'], summary: 'Update aspect sub', parameters: [{ name: 'id_aspect_sub', in: 'path', required: true, schema: { type: 'integer' } }], requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/AspectSub' } } } }, responses: { 200: { description: 'Updated' } } },
                delete: { tags: ['AspectSub'], summary: 'Delete aspect sub', parameters: [{ name: 'id_aspect_sub', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Deleted' } } },
            },

            // ════════════════════════════════════════════════════════════
            //  ASSESSMENT SETTING
            // ════════════════════════════════════════════════════════════
            '/api/assessment_setting': {
                get: { tags: ['AssessmentSetting'], summary: 'Get all assessment settings', responses: { 200: { description: 'List', content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/AssessmentSetting' } } } } } } },
                post: { tags: ['AssessmentSetting'], summary: 'Create assessment setting', requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/AssessmentSetting' } } } }, responses: { 201: { description: 'Created' } } },
            },
            '/api/assessment_setting/{id_assessment_setting}': {
                get: { tags: ['AssessmentSetting'], summary: 'Get setting by ID', parameters: [{ name: 'id_assessment_setting', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Found' } } },
                put: { tags: ['AssessmentSetting'], summary: 'Update setting', parameters: [{ name: 'id_assessment_setting', in: 'path', required: true, schema: { type: 'integer' } }], requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/AssessmentSetting' } } } }, responses: { 200: { description: 'Updated' } } },
                delete: { tags: ['AssessmentSetting'], summary: 'Delete setting', parameters: [{ name: 'id_assessment_setting', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Deleted' } } },
            },

            // ════════════════════════════════════════════════════════════
            //  ASSESSMENT
            // ════════════════════════════════════════════════════════════
            '/api/assessment': {
                get: { tags: ['Assessment'], summary: 'Get all assessments', responses: { 200: { description: 'List', content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Assessment' } } } } } } },
                post: { tags: ['Assessment'], summary: 'Create assessment', requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/Assessment' } } } }, responses: { 201: { description: 'Created' } } },
            },
            '/api/assessment/{id_assessment}': {
                get: { tags: ['Assessment'], summary: 'Get assessment by ID', parameters: [{ name: 'id_assessment', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Found' } } },
                put: { tags: ['Assessment'], summary: 'Update assessment', parameters: [{ name: 'id_assessment', in: 'path', required: true, schema: { type: 'integer' } }], requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Assessment' } } } }, responses: { 200: { description: 'Updated' } } },
                delete: { tags: ['Assessment'], summary: 'Delete assessment', parameters: [{ name: 'id_assessment', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Deleted' } } },
            },

            // ════════════════════════════════════════════════════════════
            //  SCHEDULE
            // ════════════════════════════════════════════════════════════
            '/api/schedule': {
                get: { tags: ['Schedule'], summary: 'Get all schedules', responses: { 200: { description: 'List', content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Schedule' } } } } } } },
                post: { tags: ['Schedule'], summary: 'Create schedule', requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/Schedule' } } } }, responses: { 201: { description: 'Created' } } },
            },
            '/api/schedule/{id_schedule}': {
                get: { tags: ['Schedule'], summary: 'Get schedule by ID', parameters: [{ name: 'id_schedule', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Found' } } },
                put: { tags: ['Schedule'], summary: 'Update schedule', parameters: [{ name: 'id_schedule', in: 'path', required: true, schema: { type: 'integer' } }], requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Schedule' } } } }, responses: { 200: { description: 'Updated' } } },
                delete: { tags: ['Schedule'], summary: 'Delete schedule', parameters: [{ name: 'id_schedule', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Deleted' } } },
            },

            // ════════════════════════════════════════════════════════════
            //  POINT RATE
            // ════════════════════════════════════════════════════════════
            '/api/poinrate': {
                get: { tags: ['PointRate'], summary: 'Get all point rates', responses: { 200: { description: 'List', content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/PointRate' } } } } } } },
                post: { tags: ['PointRate'], summary: 'Create point rate', requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/PointRate' } } } }, responses: { 201: { description: 'Created' } } },
            },
            '/api/poinrate/{id_poinrate}': {
                get: { tags: ['PointRate'], summary: 'Get point rate by ID', parameters: [{ name: 'id_poinrate', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Found' } } },
                put: { tags: ['PointRate'], summary: 'Update point rate', parameters: [{ name: 'id_poinrate', in: 'path', required: true, schema: { type: 'integer' } }], requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/PointRate' } } } }, responses: { 200: { description: 'Updated' } } },
                delete: { tags: ['PointRate'], summary: 'Delete point rate', parameters: [{ name: 'id_poinrate', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Deleted' } } },
            },

            // ════════════════════════════════════════════════════════════
            //  DEPARTEMENT
            // ════════════════════════════════════════════════════════════
            '/api/departement': {
                get: { tags: ['Departement'], summary: 'Get all departements', responses: { 200: { description: 'List', content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Departement' } } } } } } },
                post: { tags: ['Departement'], summary: 'Create departement', requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/Departement' } } } }, responses: { 201: { description: 'Created' } } },
            },
            '/api/departement/{id_departement}': {
                get: { tags: ['Departement'], summary: 'Get departement by ID', parameters: [{ name: 'id_departement', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Found' } } },
                put: { tags: ['Departement'], summary: 'Update departement', parameters: [{ name: 'id_departement', in: 'path', required: true, schema: { type: 'integer' } }], requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Departement' } } } }, responses: { 200: { description: 'Updated' } } },
                delete: { tags: ['Departement'], summary: 'Delete departement', parameters: [{ name: 'id_departement', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Deleted' } } },
            },

            // ════════════════════════════════════════════════════════════
            //  INFORMATION
            // ════════════════════════════════════════════════════════════
            '/api/information': {
                get: { tags: ['Information'], summary: 'Get all information/announcements', responses: { 200: { description: 'List', content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Information' } } } } } } },
                post: { tags: ['Information'], summary: 'Create information', requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/Information' } } } }, responses: { 201: { description: 'Created' } } },
            },
            '/api/information/{id_information}': {
                get: { tags: ['Information'], summary: 'Get information by ID', parameters: [{ name: 'id_information', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Found' } } },
                put: { tags: ['Information'], summary: 'Update information', parameters: [{ name: 'id_information', in: 'path', required: true, schema: { type: 'integer' } }], requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Information' } } } }, responses: { 200: { description: 'Updated' } } },
                delete: { tags: ['Information'], summary: 'Delete information', parameters: [{ name: 'id_information', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Deleted' } } },
            },
        },
    },
    apis: [], // Semua path sudah didefinisikan di atas
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;

