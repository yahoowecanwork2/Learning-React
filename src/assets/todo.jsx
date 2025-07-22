import image from './images/women-3.jpg'

function Todo() {
    return (
        <div>
            <h1>todo compontes</h1>
            <img src={image} alt="my images" width="500" />
            <ul>
                <li>one piece</li>
                <li>$3000</li>
                <li>black dressss</li>
            </ul>
        </div>
    )
}

export default Todo;