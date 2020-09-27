import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { projectStorage, projectFirestore } from '../firebase/config';

const ImgGrid = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 50px;
`;

const ImgWrap = styled(motion.div)`
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  /* padding controls height, will always be perfectly square regardless of width */
  position: relative;
  opacity: 0.8;

  :hover {
    span {
      opacity: 1;
    }
  }
`;

const Img = styled(motion.img)`
  min-width: 100%;
  min-height: 100%;
  max-width: 150%;
  position: absolute;
  top: 0;
  left: 0;
  loading: lazy;
`;

const DeleteImageBtn = styled.span`
  opacity: 0;
  position: absolute;
  font-size: 1rem;
  text-align: center;
  padding: 2px 0;
  transition: opacity 200ms ease-in-out;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.background};
  top: 5px;
  right: 5px;
  font-weight: bold;
  height: 25px;
  width: 25px;

  :hover {
    cursor: pointer;
    color: ${props => props.theme.colors.background};
    background-color: ${props => props.theme.colors.primary};
  }
`;

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore('images');
  const handleDelete = doc => {
    projectFirestore
      .collection('images')
      .doc(doc.id)
      .delete();
    projectStorage
      .ref('images')
      .child(doc.filename)
      .delete();
  };

  return (
    <ImgGrid>
      {docs &&
        docs.map(doc => {
          return (
            <ImgWrap
              key={doc.id}
              whileHover={{ opacity: 1 }}
              layout
              onClick={e =>
                !e.target.classList.contains('delete-img') &&
                setSelectedImage(doc.url)
              }
            >
              <Img
                src={doc.url}
                alt='Oops!'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
              <DeleteImageBtn
                className='delete-img'
                onClick={() => handleDelete(doc)}
              >
                X
              </DeleteImageBtn>
            </ImgWrap>
          );
        })}
    </ImgGrid>
  );
};

export default ImageGrid;
