import SkeletonElement from "./SkeletonElement"
import './Skeleton.css'
import Shimmer from "./Shimmer"

const SkeletonList = ({theme}) => {
    const themeClass = theme || 'light'
    return (
        <div className={`skeleton-wrapper  ${themeClass}`}>
            <div className="skeleton-article">
                <SkeletonElement type="title"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
            </div>
            <Shimmer />
        </div>
    );
}
 
export default SkeletonList;