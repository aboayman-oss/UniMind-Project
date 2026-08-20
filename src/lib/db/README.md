# Database module

- **Interface:** Server-only PostgreSQL/Supabase client and transaction interfaces.
- **Allowed dependencies:** Generated database types, validated server configuration, and server-side database libraries.
- **Prohibited dependencies:** Client Component imports, browser service-role credentials, UI/business rules, and unversioned schema mutations.
- **Owner:** The current database task agent; RLS/grant changes require independent security review.
