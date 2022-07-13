import { useLocation} from 'react-router-dom'
const Comments = () => {
    const location = useLocation()
    // const navigate = useNavigate()
    const comments = location.state

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <p>{comments.comments}</p>
                </div>
            </div>
        </div>
    );
}

export default Comments;
