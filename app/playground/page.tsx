
const style = {
    content: "Before",
    // position: "absolute",
    bottom: "0",
    left: "0",
    backgroundColor: "red",
    color: "white",
    padding: '4px',
}

const page = () => {
    return (
        <>
            <div className="grid grid-cols-1 space-y-12 pb-12">
                <div style={style} className="w-full h-screen text-7xl">
                    king solomon
                </div>
            </div>
        </>
    )
}

export default page