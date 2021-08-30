import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import Feedback from 'components/Feedback';
import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { SiteFeedbackProps } from 'pages/feedback/[siteId]';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createFeedback } from 'services/db';

export type NewFeedback = {
  author: string | undefined;
  authorId: string | undefined;
  createAt: string;
  siteId: string | string[] | undefined;
  status: string;
  text: string;
  provider: string | undefined;
};

export function TemplateSiteFeedback({ feedback }: SiteFeedbackProps) {
  const { user } = useAuth();
  const { query } = useRouter();
  const [allFeedback, setAllFeedback] = useState(feedback);
  const { register, handleSubmit, reset } = useForm();

  function handleRegisterNewFeedBack({ comment }: any) {
    const newFeedback: NewFeedback = {
      author: user?.name,
      authorId: user?.uid,
      siteId: query.siteId,
      text: comment,
      createAt: new Date().toISOString(),
      provider: user?.provider,
      status: 'pending',
    };

    setAllFeedback((state) => [newFeedback, ...state]);
    createFeedback(newFeedback);
    reset();
  }

  return (
    <Box bgColor="black.400" minH="100vh" w="full" color="white">
      <Flex direction="column" w="full" maxW="700px" margin="0 auto">
        {user && (
          <Box as="form" onSubmit={handleSubmit(handleRegisterNewFeedBack)}>
            <FormControl my="8">
              <FormLabel htmlFor="comment">Comment</FormLabel>
              <Input
                id="comment"
                placeholder="Leave a comment"
                {...register('comment', { required: true })}
              />
              <Button size="sm" mt="4" type="submit">
                Add Comment
              </Button>
            </FormControl>
          </Box>
        )}
        {allFeedback.map((feed) => (
          <Feedback
            key={feed.id}
            author={feed.author}
            text={feed.text}
            createdAt={feed.createAt}
          />
        ))}
      </Flex>
    </Box>
  );
}
