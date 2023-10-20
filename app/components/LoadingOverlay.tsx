export default function LoadingOverlay(p:{loading:boolean}) {
	if(!p.loading){
		return null
	}
  return (
    <div className="absolute w-full h-full bg-base-100 z-20 flex justify-center items-center">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
}
