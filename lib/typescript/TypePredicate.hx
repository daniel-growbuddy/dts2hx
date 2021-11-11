package typescript;

typedef TypePredicate = ts.AnyOf4<ThisTypePredicate, IdentifierTypePredicate, AssertsThisTypePredicate, AssertsIdentifierTypePredicate>;