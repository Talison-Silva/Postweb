import EmphasisInput from "@/UI/components/form/sign-up/emphasis";

export default ({}) => {
	return(
		<div className="w-[600px] h-[416px] flex flex-col .justify-center items-center gap-2 p-6">
			<EmphasisInput name="emphasis" label="insert an image that highlights the post, that is, an image related to the subject."/>
		</div>
	)
}
