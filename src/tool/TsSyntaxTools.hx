package tool;

import typescript.NodeFlags;
import typescript.TypeParameterDeclaration;
import typescript.SourceFile;
import typescript.Identifier;
import typescript.Node;
import typescript.EntityName;
import typescript.QualifiedName;
import typescript.DeclarationName;
import typescript.SyntaxKind;
import Typescript;

using tool.HaxeTools;

class TsSyntaxTools {

	static public function getSyntaxKindName(kind: SyntaxKind): String {
		return js.Syntax.code('require("typescript").SyntaxKind[{0}]', kind);
	}

	static public function entityNameString(entityName: EntityName): String {
		// Identifier | QualifiedName
		var node = (cast entityName: Node);
		return switch node.kind {
			case Identifier: (cast entityName: Identifier).escapedText;
			case QualifiedName: entityNameString((cast entityName: QualifiedName).left) + '_' + entityNameString((cast entityName: QualifiedName).right);
			default: throw 'EntityName has unexpected kind <b>${getSyntaxKindName(node.kind)}</>';
		}
	}

	static public function typeParameterDeclarationName(typeParameterDeclaration: TypeParameterDeclaration): String {
		var name: Identifier = (untyped typeParameterDeclaration.name: Identifier);
		return (name.escapedText: String).toSafeTypeName();
	}
	
	// translated from https://github.com/microsoft/TypeScript/blob/3340142dda47f52af55144130304eef19a97ec31/src/compiler/utilities.ts#L1064
	static public function isVarConst(node: Node) {
		return Typescript.getCombinedNodeFlags(node) & NodeFlags.Const != 0;
	}

}
