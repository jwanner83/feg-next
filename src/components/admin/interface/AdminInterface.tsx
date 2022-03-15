import { Box, Button, Container, Grid, useMantineTheme } from '@mantine/core'
import { ReactNode } from 'react'

type AdminInterfaceParams = {
  header?: ReactNode
  children?: ReactNode
}

export default function AdminInterface({
  header,
  children
}: AdminInterfaceParams) {
  const theme = useMantineTheme()

  return (
    <>
      <Box sx={{ backgroundColor: theme.colors.gray[0] }}>
        <Container>
          <Grid grow gutter="xs" sx={{ padding: '10px', margin: 0 }}>
            <Grid.Col span={6} sx={{ display: 'flex', alignItems: 'center' }}>
              {header ?? <>Admin</>}
            </Grid.Col>
            <Grid.Col
              span={6}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'right'
              }}
            >
              <Button radius="xs" variant="light" color="dark">
                Edit
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
      {children}
    </>
  )
}
