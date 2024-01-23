<script setup>
import { cn } from '~/lib/utils';
import { Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle} from '~/components/ui/card'
const { data } = await useFetch('/api/products')
</script>

<template>
  <div class="flex flex-row gap-10 justify-center mt-32">
    <div
      v-for="(product, index) in data"
      :key="index"
    >
      <Card :class="cn('w-[380px]', $attrs.class ?? '')">
        <CardHeader>
          <CardTitle>{{ product.name }}</CardTitle>
          <CardDescription>{{ product.createdAt }}</CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4">
          R$ {{ product.price / 100 }}
        </CardContent>
        <CardFooter>
          <Button class="w-full">
            <Check class="mr-2 h-4 w-4" /> Mark all as read
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>