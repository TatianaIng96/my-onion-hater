import './OnionHater.css'

function OnionHater() {

    const handleChange = (e) => {
        if(e.target.value.includes('cebolla')){
            alert('ODIO LA CEBOLLA')
        }
    }
    return (
        <>
          <input type='textarea' name='name' onChange={handleChange} />
        </>
    )
}

export default OnionHater;