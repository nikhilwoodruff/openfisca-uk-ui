const DEFAULT_POLICY = {
	basic_rate: {
		title: "Basic rate",
		description: "The basic rate is the first of three tax brackets on all income, after allowances are deducted.",
		default: 20,
		value: 20,
		summary: "Change the basic rate to @%",
		type: "rate",
	},
	higher_rate: {
		title: "Higher rate",
		description: "The higher rate is the middle tax bracket.",
		default: 40,
		value: 40,
		summary: "Change the higher rate to @%",
		type: "rate",
	},
	add_rate: {
		title: "Additional rate",
		description: "The additional rate is the highest tax bracket, with no upper bound.",
		default: 45,
		value: 45,
		summary: "Change the additional rate to @%",
		type: "rate",
	},
	higher_threshold: {
		title: "Higher rate threshold",
		description: "The lower threshold for the higher rate of income tax (and therefore the upper threshold of the basic rate).",
		default: 37500,
		value: 37500,
		max: 200000,
		summary: "Change the higher rate to £@/year",
		type: "yearly",
	},
	add_threshold: {
		title: "Additional rate",
		description: "The lower threshold for the additional rate.",
		default: 150000,
		value: 150000,
		max: 1000000,
		summary: "Change the additional rate to £@/year",
		type: "yearly",
	},
	personal_allowance: {
		title: "Personal allowance",
		description: "The personal allowance is deducted from general income.",
		default: 12500,
		value: 12500,
		max: 25000,
		summary: "Change the personal allowance to £@/year",
		type: "yearly",
	},
	NI_main_rate: {
		title: "NI main rate",
		description: "The Class 1 NI main rate is paid on employment earnings between the Primary Threshold and the Upper Earnings Limit.",
		default: 12,
		value: 12,
		summary: "Change the NI main rate to @%",
		type: "rate",
	},
	NI_add_rate: {
		title: "NI additional rate",
		description: "The Class 1 NI additional rate is paid on employment earnings above the Upper Earnings Limit.",
		default: 2,
		value: 2,
		summary: "Change the NI additional rate to @%",
		type: "rate",
	},
	NI_PT: {
		title: "NI Primary Threshold",
		description: "The Primary Threshold is the lower bound for the main rate of NI.",
		default: 183,
		value: 183,
		max: 1000,
		summary: "Change the PT to £@/week",
		type: "weekly",
	},
	NI_UEL: {
		title: "NI Upper Earnings Limit",
		description: "The Upper Earnings Limit is the upper bound for the main rate of NI.",
		default: 962,
		value: 962,
		max: 10000,
		summary: "Change the UEL to £@/week",
		type: "weekly",
	},
	NI_LPL: {
		title: "NI Lower Profits Limit",
		description: "The Lower Profits Limit is the threshold at which self-employed earners pay the main Class 4 rate.",
		default: 9500,
		value: 9500,
		max: 20000,
		summary: "Change the LPL to £@/year",
		type: "yearly",
	},
	NI_UPL: {
		title: "NI Upper Profits Limit",
		description: "The Upper Profits Limit is the threshold at which self-employed earners pay the additional Class 4 rate.",
		default: 50000,
		value: 50000,
		max: 100000,
		summary: "Change the LPL to £@/year",
		type: "yearly",
	},
	NI_class_4_main_rate: {
		title: "NI Class 4 main rate",
		description: "The main rate paid between the Lower and Upper Profits Limits",
		default: 9,
		value: 9,
		max: 100,
		summary: "Change the rate to @%",
		type: "rate",
	},
	NI_class_4_add_rate: {
		title: "NI Class 4 additional rate",
		description: "The additional rate paid above the Upper Profits Limit",
		default: 2,
		value: 2,
		max: 100,
		summary: "Change the rate to @%",
		type: "rate",
	},
	child_UBI: {
		title: "Child UBI",
		description: "A basic income for children is given to every child aged under 18, regardless of household income.",
		default: 0,
		value: 0,
		max: 250,
		summary: "Give a basic income of £@/week to children",
		type: "weekly",
	},
	adult_UBI: {
		title: "Working-age adult UBI",
		description: "Basic income for working-age adults is given to individuals aged over 18 but under State Pension age.",
		default: 0,
		value: 0,
		max: 250,
		summary: "Give a basic income of £@/week to working-age adults",
		type: "weekly",
	},
	senior_UBI: {
		title: "Senior UBI",
		description: "A basic income for senior citizens is given to those over State Pension age.",
		default: 0,
		value: 0,
		max: 250,
		summary: "Give a basic income of £@/week to seniors",
		type: "weekly",
	},
	abolish_savings_allowance: {
		title: "Personal Savings Allowance",
		description: "The Personal Savings Allowance is the amount of taxable savings interest income disregarded for Income Tax purposes. It has different values at different Income Tax bands - this switch abolishes all of them.",
		default: false,
		value: false,
		summary: "Abolish the Personal Savings Allowance",
		type: "bool"
	},
	abolish_dividend_allowance: {
		title: "Dividend Allowance",
		description: "The Dividend Allowance disregards up to £2,000 of taxable dividend income per year. This switch abolishes it.",
		default: false,
		value: false,
		summary: "Abolish the Dividend Allowance",
		type: "abolish"
	},
	abolish_income_tax: {
		title: "Income Tax",
		description: "Income Tax raises over £190bn per year. This switch abolishes it.",
		default: false,
		value: false,
		summary: "Abolish Income Tax",
		type: "abolish"
	},
	abolish_NI: {
		title: "National Insurance",
		description: "This switch abolishes National Insurance.",
		default: false,
		value: false,
		summary: "Abolish National Insurance",
		type: "abolish"
	},
	abolish_UC: {
		title: "Universal Credit",
		description: "This switch abolishes Universal Credit",
		default: false,
		value: false,
		summary: "Abolish Universal Credit",
		type: "abolish"
	},
	abolish_CB: {
		title: "Child Benefit",
		description: "This switch abolishes the Child Benefit",
		default: false,
		value: false,
		summary: "Abolish Child Benefit",
		type: "abolish"
	},
	abolish_CTC: {
		title: "Child Tax Credit",
		description: "This switch abolishes the Child Tax Credit",
		default: false,
		value: false,
		summary: "Abolish Child Tax Credit",
		type: "abolish"
	},
	abolish_WTC: {
		title: "Child Tax Credit",
		description: "This switch abolishes the Working Tax Credit",
		default: false,
		value: false,
		summary: "Abolish Working Tax Credit",
		type: "abolish"
	},
	abolish_HB: {
		title: "Housing Benefit",
		description: "This switch abolishes Housing Benefit",
		default: false,
		value: false,
		summary: "Abolish Housing Benefit",
		type: "abolish"
	},
	abolish_SP: {
		title: "State Pension",
		description: "This switch abolishes the State Pension",
		default: false,
		value: false,
		summary: "Abolish State Pension",
		type: "abolish"
	},
};

export default DEFAULT_POLICY;
