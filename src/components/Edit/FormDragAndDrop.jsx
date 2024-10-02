// import React, { useState, useRef } from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
// import { useSetRecoilState } from "recoil";
// import { UploadCloud01 } from "@untitled-ui/icons-react";

// import loadingState from "../atoms/loading";
// import useAuth from "../hooks/useAuth";
// import { uploadImg } from "../utils/api/image";
// import { styledIcon } from "../styles/globalStyle";
// import { showErrorToastMsg } from "../utils/showToastMsg";

// const DragAndDropLayout = styled.form`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const FileInput = styled.input`
//   display: none;
// `;

// const DropZoneBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem 1.5rem;
//   box-shadow: 0 0 0 ${({ $isDragging }) => ($isDragging ? 0.125 : 0.0625)}rem
//     ${({ theme, $isDragging }) =>
//       $isDragging ? theme.colors.brand500 : theme.colors.gray200}
//     inset;
//   border-radius: 0.5rem;
//   text-align: center;
//   transition: background-color 0.3s, border-color 0.3s;
//   background-color: ${({ theme }) => theme.colors.white};
// `;

// const UploadCloudIcon = styledIcon({
//   icon: UploadCloud01,
//   iconWidth: "1.5rem",
//   iconHeight: "1.5rem",
//   strokeColor: "#475467",
// });
// const UploadCloudLayout = styled.div`
//   width: 3rem;
//   height: 3rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${({ theme }) => theme.colors.gray100};
//   border: 0.5rem solid ${({ theme }) => theme.colors.gray50};
//   border-radius: 1.75rem;
// `;
// const UploadCloudBox = () => {
//   return (
//     <UploadCloudLayout>
//       <UploadCloudIcon />
//     </UploadCloudLayout>
//   );
// };

// const DropZoneContentBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.75rem;
//   justify-content: center;
//   align-items: center;
// `;

// const DropZoneContentTextBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.25rem;
// `;

// const DropZoneContentTitleBox = styled.div`
//   display: flex;
//   gap: 0.25rem;
// `;

// const DropZoneContentClickableText = styled.span`
//   ${({ theme }) => theme.texts.textSM}
//   font-weight: ${({ theme }) => theme.weights.semiBold};
//   color: ${({ theme }) => theme.colors.brand700};
//   cursor: pointer;
// `;

// const DropZoneContentText = styled.span`
//   ${({ theme }) => theme.texts.textSM}
//   font-weight: ${({ theme }) => theme.weights.regular};
//   color: ${({ theme }) => theme.colors.gray600};
// `;

// const DropZoneContentSupportingText = styled.span`
//   ${({ theme }) => theme.texts.textXS}
//   font-weight: ${({ theme }) => theme.weights.regular};
//   color: ${({ theme }) => theme.colors.gray600};
// `;

// const PreviewCol = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 1rem;
//   gap: 0.75rem;
// `;

// const PreviewBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 6rem;
//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 0.5rem;
//     margin-bottom: 0.5rem;
//   }
//   p {
//     font-size: 0.875rem;
//     text-align: center;
//     color: #555;
//     word-break: break-word;
//   }
// `;

// const FormDragAndDrop = ({ img, setImg }) => {
//   const [isDragging, setIsDragging] = useState(false);
//   const setIsLoading = useSetRecoilState(loadingState);

//   const fileInputRef = useRef(null);
//   const { accessToken } = useAuth();

//   const handleFiles = async (selectedFiles) => {
//     const fileArray = Array.from(selectedFiles);
//     await _uploadImgToServer(fileArray[0]);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const droppedFiles = e.dataTransfer.files;
//     if (droppedFiles.length > 0) {
//       handleFiles(droppedFiles);
//     }
//   };

//   const handleDragEnter = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   // 파일 인풋 변경 핸들러
//   const handleChange = (e) => {
//     handleFiles(e.target.files);
//   };

//   const _uploadImgToServer = async (file) => {
//     setIsLoading(true);
//     try {
//       const res = await uploadImg(accessToken, file);
//       const imageArray = res.split("/");
//       const imgName = imageArray[imageArray.length - 1];
//       const imgUrl = res;
//       setImg({ name: imgName, url: imgUrl });
//     } catch (error) {
//       console.error(error);
//       showErrorToastMsg(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // TODO 사진 업로드 한 번에 한 장이 최대. 선택된 사진 UI 디자인 시스템에 맞춰 수정하기
//   return (
//     <DragAndDropLayout>
//       <FileInput
//         type='file'
//         ref={fileInputRef}
//         multiple
//         onChange={handleChange}
//       />
//       <DropZoneBox
//         $isDragging={isDragging}
//         onDragEnter={handleDragEnter}
//         onDragLeave={handleDragLeave}
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//       >
//         <DropZoneContentBox>
//           <UploadCloudBox />
//           <DropZoneContentTextBox>
//             <DropZoneContentTitleBox>
//               <DropZoneContentClickableText
//                 onClick={() => fileInputRef.current.click()}
//               >
//                 클릭하여 업로드
//               </DropZoneContentClickableText>
//               <DropZoneContentText>혹은 드래그 하기</DropZoneContentText>
//             </DropZoneContentTitleBox>
//             <DropZoneContentSupportingText>
//               SVG, PNG, JPG or GIF (max. 800x400px)
//             </DropZoneContentSupportingText>
//           </DropZoneContentTextBox>
//         </DropZoneContentBox>
//       </DropZoneBox>
//       <PreviewCol>
//         {img && (
//           <PreviewBox>
//             <img src={img.url} alt={img.name} />
//             <p>{img.name}</p>
//           </PreviewBox>
//         )}
//       </PreviewCol>
//     </DragAndDropLayout>
//   );
// };

// FormDragAndDrop.propTypes = {
//   img: PropTypes.object.isRequired,
//   setImg: PropTypes.func.isRequired,
// };

// export { FormDragAndDrop };
