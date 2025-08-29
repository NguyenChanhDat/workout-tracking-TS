export function InsertExerciseData() {
  return `--sql
        USE LocalDatabase
        INSERT INTO [Exercises] ([name], [imageUrl], [description], [targetMuscle1], [targetMuscle2], [targetMuscle3])
        VALUES 
        ('Squats', 'https://example.com/squats.jpg', 'A legendary exercise', 'Quads', 'Glutes', NULL),
        ('Deadlift', 'https://example.com/deadlift.jpg','Build a thick back with this one', 'Back', 'Hamstring', 'Glutes'),
        ('Bench Press', 'https://example.com/benchpress.jpg','King of all exercises', 'Chest', 'Shoulders', 'Triceps'),
        ('Pull-Ups', 'https://example.com/pullups.jpg',NULL,'Back', 'Biceps', NULL),
        ('Lunges', 'https://example.com/lunges.jpg', 'Forget about ur ex with this one', 'Quads', 'Glutes', NULL);
`;
}
