import axios from 'axios';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { AppStyled } from './AppStyled';
import { useEffect } from 'react';
import { useState } from 'react';

export const App = () => {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    if (name) {
      setLoading(true);
      fetchImages(name, page)
        .then(response => {
          setImages((prev) => [...prev, ...response]);
        })
        .catch(error => console.log(error))
        .finally(setLoading(false));
    }
  }, [name, page]);

  const handleChangeState = ( name ) => {
    setName(name);
    setPage(1);
    setImages('');
  };

  const fetchImages = async (name, page) => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${name}&page=${page}&key=29365633-60606ea12614ba8c3cfb381aa&image_type=photo&orientation=horizontal&per_page=12`
      );
      return response.data.hits;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMoreBtn = () => {
     setPage((prev) => {return prev + 1});
  setLoading(false);    
    // });
  };

  const closeModal = () => {
    setModalShow(false);
    setModalContent('');
  };

  const openModal = largeImg => {
    setModalShow(true);
    setModalContent(largeImg);
  };

  return (
    <AppStyled>
      <SearchBar onSubmit={handleChangeState} />
      <ImageGallery images={images} onClick={openModal}></ImageGallery>
      {loading && <Loader></Loader>}
      {images.length > 0 && <Button onClick={handleLoadMoreBtn}></Button>}
      {modalShow && (
        <Modal onClose={closeModal}>
          <img src={modalContent} alt="" />
        </Modal>
      )}
    </AppStyled>
  );
};



// export class App extends Component {

//   state = {
//     name: '',
//     page: 1,
//     images: [],
//     loading: false,
//     error: null,
//     modalShow: false,
//     modalContent: '',
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevState.name;
//     const nextName = this.state.name;
//     const { name, page } = this.state;

//     if (prevProps.name !== this.props.name) {

//       this.handleChangeState();

//     }
//     if (prevName !== nextName) {
//       console.log('Prev', prevName)
//       console.log('Next', nextName)
//       this.fetchImages(name, page).then(response => {
//         this.setState({ images: response, page: page + 1, loading: false });
//       });
//     }
//   }

//   fetchImages = async (name, page) => {
//     try {
//       const response = await axios.get(
//         `https://pixabay.com/api/?q=${name}&page=${page}&key=29365633-60606ea12614ba8c3cfb381aa&image_type=photo&orientation=horizontal&per_page=12`
//       );
//       console.log(response.data.hits)
//       return response.data.hits;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   handleChangeState = ({ name }) => {
//     this.setState({ name: name, page: 1, loading: true });

//   };

//   closeModal = () => {
//     this.setState({
//       modalShow: false,
//       modalContent: '',
//     });
//   }

//   openModal = largeImg => {
// this.setState({
//   modalShow: true,
//   modalContent: largeImg,
// })
//   }

//   handleLoadMoreBtn = () => {
//     const { name, page } = this.state;
//     this.setState({ loading: true });
//     this.fetchImages(name, page).then(response => {
//       this.setState(prevState => ({
//         images: [...prevState.images, ...response],
//         page: prevState.page + 1,
//         loading: false,
//       }));
//     });
//   };

//   render() {
//     const {modalShow, modalContent, images, loading} = this.state;

//     return (
//       <AppStyled>
//         <SearchBar onSubmit={this.handleChangeState}/>
//         <ImageGallery images={images} onClick={this.openModal}> </ImageGallery>
//         {loading &&
//         <Loader></Loader>}
//         {images.length > 0 &&
//         <Button onClick={this.handleLoadMoreBtn}></Button>}
//         {modalShow && (
//         <Modal onClose={this.closeModal}>
//           <img src={modalContent} alt="" />
//         </Modal>
//       )}
//       </AppStyled>
//     )
//   }
// }
