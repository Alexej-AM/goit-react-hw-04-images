import { MutatingDots} from 'react-loader-spinner';

export const Loader = () => {
  return(
    <div>
      <MutatingDots
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        color="blue"
      />
    </div>
  )
}