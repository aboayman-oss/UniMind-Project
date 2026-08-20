# Supabase local project

- **Interface:** Versioned local configuration, migrations, synthetic seed data, and database tests/types.
- **Allowed dependencies:** SQL migrations, explicit grants/RLS, synthetic fixtures, and generated types.
- **Prohibited dependencies:** Dashboard-only changes, secrets, real private data, broad grants, and unreviewed destructive operations.
- **Owner:** The current database task agent; RLS, grants, and deletion require independent review.
