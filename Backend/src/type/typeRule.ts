export type RuleReference = string;

export type SimpleRule = {
	code: RuleReference;
	description: string;
	field: string;
} & (
	| {
			type: "EQUALS" | "DISTINCT";
			value: string | number;
	  }
	| {
			type: "HIGHER" | "LOWER";
			value: number;
	  }
	| {
			type: "IN";
			value: (string | number)[];
	  }
);

export type CompositeRule = {
	code: RuleReference;
} & (
	| {
			type: "AND" | "OR";
			rules: AnyRule[];
	  }
	| {
			type: "NOT";
			rules: AnyRule;
	  }
);

export type RuleLiteral = SimpleRule | CompositeRule;

export type AnyRule = RuleLiteral | RuleReference;
