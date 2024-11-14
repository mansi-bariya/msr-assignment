import { aboutImg1, aboutImg2, avatar, bigDelivery, bigPackage, bigSupport, bleederImg, checkIcon, deliveryIcon, enduranceIcon, epoImg, eqRoyalImg, flexifyImg, jointHealthIcon, lungsIcon, oxygenIcon, packageIcon, performanceIcon, recoveryIcon, supportIcon, trust1, trust2, trust3, unlockImg } from "../assets/images";
import { Icons } from "../components";

export const headerLinkList = [
	{
		url: "/",
		text: "Shop All",
	},
	{
		url: "/",
		text: "Shop by Benefits",
	},
	{
		url: "/",
		text: "About",
	},
	{
		url: "/",
		text: "Bundles",
	},
	{
		url: "/",
		text: "Contact",
	},
];

export const headerOtherLinkList = [
	{
		url: "/",
		icon: Icons.search,
	},
	{
		url: "/",
		icon: Icons.cart,
	},
	{
		url: "/",
		icon: Icons.profile,
	},
];

export const serviceList = [
	{
		icon: packageIcon,
		text: "Never Got Returned Products",
	},
	{
		icon: deliveryIcon,
		text: "Fast Delivery",
	},
	{
		icon: supportIcon,
		text: "Customer Support",
	},
	{
		icon: supportIcon,
		text: "Lorem Ipsum",
	},
];

export const aboutUs = [
	{
		tagline: "Uniquely formulated for horse trainers",
		title: "Who Want to Win",
		des: "From joint health to muscle strength, our products keep your horse fit, fast, and ready to win. With advanced formulations trusted by top trainers, you can push past the competition and achieve the results you’ve been aiming for.",
		img: aboutImg1,
	},
	{
		tagline: "Natural",
		title: "Bleeder Remedy",
		des: "While more than 95% of racehorses experience exercise-induced pulmonary haemorrhage (EIPH), commonly known as bleeders, you want to avoid exposing them to side effects like dehydration from potent drugs. TTL's BleederShield can help strengthen capillaries in the lungs, reduce oxidative stress, and improve blood flow.",
		img: aboutImg2,
	},
];

export const coreProducts = [
	{
		img: unlockImg,
		title: "UN-LOCK+",
		des: "Horserace performance muscle formula for endurance, fatigue and recovery",
		supports: [
			{
				bgColor: "#FFEAD8",
				icon: enduranceIcon,
				text: "Endurance",
			},
			{
				bgColor: "#FFEAD8",
				icon: recoveryIcon,
				text: "recovery",
			},
		],
		color: "#F58220",
		price: "$149.00",
		perDay: "$0.75",
	},
	{
		img: flexifyImg,
		title: "Flexify-HA",
		des: "Joint support formula for cartilage, flexibility and joint health",
		supports: [
			{
				bgColor: "#DAFFFE",
				icon: jointHealthIcon,
				text: "Joint Health",
			},
		],
		color: "#00B0AD",
		price: "$149.00",
		perDay: "$0.75",
	},
	{
		img: epoImg,
		title: "EPO-Equine",
		des: "All-natural blood builder optimises oxygen levels for peak performance",
		supports: [
			{
				bgColor: "#FFE0E0",
				icon: oxygenIcon,
				text: "Oxygen Levels",
			},
		],
		color: "#9E3023",
		price: "$149.00",
		perDay: "$0.75",
	},
	{
		img: bleederImg,
		title: "Bleeder Shield",
		des: "One-of-a-kind respiratory formula. Now comes in a powder",
		supports: [
			{
				bgColor: "#F8E3FF",
				icon: lungsIcon,
				text: "Lungs Support",
			},
		],
		color: "#663179",
		price: "$149.00",
		perDay: "$0.75",
	},
	{
		img: eqRoyalImg,
		title: "EQ-Royal",
		des: "Natural blood builder focused on optimising performance for equestrian horses.",
		supports: [
			{
				bgColor: "#DDFFF1",
				icon: performanceIcon,
				text: "Performance",
			},
		],
		color: "#28996A",
		price: "$149.00",
		perDay: "$0.75",
	},
];

export const supportProducts = [
	{
		id: 1,
		category: "orange",
		img: unlockImg,
		title: "UN-LOCK+",
		des: "Horserace performance muscle formula for endurance, fatigue and recovery",
		supports: [
			{
				bgColor: "#FFEAD8",
				icon: enduranceIcon,
				text: "Endurance",
			},
			{
				bgColor: "#FFEAD8",
				icon: recoveryIcon,
				text: "recovery",
			},
		],
		color: "#F58220",
		price: "$149.00",
		perDay: "$0.75",
	},
	{
		id: 2,
		category: "blue",
		img: flexifyImg,
		title: "Flexify-HA",
		des: "Joint support formula for cartilage, flexibility and joint health",
		supports: [
			{
				bgColor: "#DAFFFE",
				icon: jointHealthIcon,
				text: "Joint Health",
			},
		],
		color: "#00B0AD",
		price: "$149.00",
		perDay: "$0.75",
	},
	{
		id: 3,
		category: "red",
		img: epoImg,
		title: "EPO-Equine",
		des: "All-natural blood builder optimises oxygen levels for peak performance",
		supports: [
			{
				bgColor: "#FFE0E0",
				icon: oxygenIcon,
				text: "Oxygen Levels",
			},
		],
		color: "#9E3023",
		price: "$149.00",
		perDay: "$0.75",
	},
	{
		id: 4,
		category: "purple",
		img: bleederImg,
		title: "Bleeder Shield",
		des: "One-of-a-kind respiratory formula. Now comes in a powder",
		supports: [
			{
				bgColor: "#F8E3FF",
				icon: lungsIcon,
				text: "Lungs Support",
			},
		],
		color: "#663179",
		price: "$149.00",
		perDay: "$0.75",
	},
];

export const trustData = [
	{
		img: trust1,
		des: "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience.",
		perImg: avatar,
		name: "James Morgan",
		designation: "Certificate IV in Horse Racing ",
	},
	{
		img: trust2,
		des: "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience.",
		perImg: avatar,
		name: "James Morgan",
		designation: "Certificate IV in Horse Racing ",
	},
	{
		img: trust3,
		des: "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience.",
		perImg: avatar,
		name: "James Morgan",
		designation: "Certificate IV in Horse Racing ",
	},
	{
		img: trust1,
		des: "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience.",
		perImg: avatar,
		name: "James Morgan",
		designation: "Certificate IV in Horse Racing ",
	},
	{
		img: trust2,
		des: "At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience.",
		perImg: avatar,
		name: "James Morgan",
		designation: "Certificate IV in Horse Racing ",
	},
];

export const serviceData = [
	{
		img: bigPackage,
		text: "Returns Policy",
		des: "We’ve never had a return. That's how confident we are.",
	},
	{
		img: bigDelivery,
		text: "Fast Delivery",
		des: "Guaranteed next-day shipping across New Zealand and Australia.",
	},
	{
		img: bigSupport,
		text: "Customer Support",
		des: "Contact us for personalised recommendations.",
	},
]

export const subscribeList = [
	{
		icon: checkIcon,
		text: "Save Upto 20%"
	},
	{
		icon: checkIcon,
		text: "From as little as $0.70 a day",
	},
	{
		icon: checkIcon,
		text: "Pause or cancel anytime",
	},
]