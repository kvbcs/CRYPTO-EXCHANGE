"use client";
import PromoCards from "@/Components/Cards/PromoCards";
import { getAllPromo } from "@/Services/promoCode";
import { AllPromoProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
	const [promoList, setPromoList] = useState<AllPromoProps[]>();
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		getAllPromo().then((res) => {
			setPromoList(res.data);
			console.log(res.data);
		});
	}, [isReloadNeeded]);

	return (
		<div>
			<button
				className="bg-sky-500 p-3 rounded-full"
				onClick={() => {
					window.sessionStorage.removeItem("token");
					push("/");
				}}
			>
				Disconnect
			</button>
			{promoList &&
				promoList.map((promo) => {
					return (
						<div key={promo.id}>
							<PromoCards promo={promo} />
						</div>
					);
				})}
		</div>
	);
};

export default page;
