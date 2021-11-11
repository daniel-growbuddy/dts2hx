package typescript;

typedef InvalidatedProject<T> = ts.AnyOf3<UpdateOutputFileStampsProject, BuildInvalidedProject<T>, UpdateBundleProject<T>>;