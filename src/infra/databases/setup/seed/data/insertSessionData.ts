export function InsertSessionData() {
  return `--sql
        USE LocalDatabase
        INSERT INTO [Sessions] ([PlanId], [date])
        VALUES 
        (1, '2025-01-01'),
        (1, '2025-02-01'),
        (2, '2025-01-01'), 
        (2, '2025-02-01'), 
        (3, '2025-01-01'); 
`;
}
