import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ReactHtmlParser from 'html-react-parser';
import FetchApi from "../fetch";
import NavBar from "../components/navbar/NavBar";
import { Box, Button, HStack, Heading, IconButton, Text, Textarea, VStack } from "@chakra-ui/react";
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createComment, getAllCommentsByBlog, selectAllComments } from "../app/blog/commentSlice";
import { selectUser } from "../app/auth/authslice";
import { GoComment } from "react-icons/go";
import { BsReply } from "react-icons/bs";



export default function SingleBlog() {
  const params = useParams();
  const id = params.blogId;
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const allComments = useSelector(selectAllComments)

  useEffect(() => {
    async function getBlogData() {
      const response = await FetchApi.fetch(`/api/blog/get/${id}`, {
        method: 'GET'
      });
      setBlog(response)
    }

    if (!blog) {
      getBlogData();
    }

  }, [blog, id])

  function handleComment(event) {
    dispatch(createComment({ blog: blog._id, content: comment, creator: user._id }))
    setComment('')
  }

  useEffect(() => {
    if (!allComments[blog?._id] && blog?._id) {
      dispatch(getAllCommentsByBlog(blog?._id))
    }
  }, [allComments, blog])
  return (
    <Box mx={'auto'}>
      <NavBar />
      <Heading size={'md'} textAlign={'center'} my={'20px'}>
        {blog?.title}
      </Heading>
      <Box p={'10px'}>
        <Text lineHeight={'30px'} p={'20px'}>
          {
            blog ? ReactHtmlParser(blog?.blogContent) : "Loading..."

          }
        </Text>
        <HStack mt={'10px'}>
          <IconButton icon={<AiOutlineLike />} />
          <IconButton icon={<AiOutlineDislike />} />
        </HStack>
        <VStack align={'left'}>
          <Textarea width={'30%'} height={'128px'} backgroundColor={'#eee'} mt={'10px'} value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Write a comment" />
          <Button w={'120px'} colorScheme="blue" mt={'10px'} onClick={handleComment}>Comment</Button>

        </VStack>
      </Box>

      <VStack align={'left'} my={'20px'}>
        {
          allComments[blog?._id]?.map((comment) => {
            return <Box key={comment._id} mt={'20px'} ml={'20px'} >
              <Text fontSize={'12px'} color={'#blue'}>
                Comment By  {comment.creator.name}
              </Text>
              <Text ml={'20px'}>
                {comment.content}
              </Text>
              <HStack gap={'20px'} mt={'10px'}>
                {/* Like Comment Reply */}
                <AiOutlineLike />
                <AiOutlineDislike />
                {/* <GoComment /> */}
                <BsReply />
              </HStack>
            </Box>
          })
        }
      </VStack>
    </Box>
  )
}
