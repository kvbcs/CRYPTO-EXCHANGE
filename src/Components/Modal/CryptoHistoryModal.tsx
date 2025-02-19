import { postBuyCrypto, postCreateCrypto } from "@/Services/crypto";
import { AllCryptoProps, CreateUpdateCryptoProps } from "@/Utils/types";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CreateCryptoForm } from "../Forms/CreateCryptoForm";

export type ModalHistoryProps = {
	id?: AllCryptoProps;
	isLoading?: any;
};
export const CryptoHistoryModal = ({
	id,
	isLoading,
}: ModalHistoryProps) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const style = {
		position: "absolute" as "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 600,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	return (
		<div>
			<button
				onClick={handleOpen}
				className="bg-[gold] text-center rounded-lg text-black w-20 p-1 text-sm mt-1"
			>
				View history
			</button>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<div>
						<span
							className="absolute right-10 top-10 cursor-pointer"
							onClick={handleClose}
						></span>
						<CreateCryptoForm
							isLoading={isLoading}
							handleClose={handleClose}
						/>
					</div>
				</Box>
			</Modal>
		</div>
	);
};
