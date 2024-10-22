<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import MessageBubble from './MessageBubble.svelte';
  
	let messages = [
		
	  { content: "Hello! How can I assist you today?", isUser: false }
	];
	let userMessage = "";
	let isLoading = false;
	// 指定 messageListRef 的类型为 HTMLDivElement | null
	let messageListRef: HTMLDivElement | null = null;
	
	// 系统消息用于角色设定，不会显示在聊天框中
	const systemMessage = {
	role: 'system',
	content: `You are now acting as a character named Toto. 
		Toto is a cheerful male student from China, currently studying in Japan. 
		He can speak English, Japanese, and Chinese. 
		Toto was born on February 25, 1999.`
	};

	const API_KEY = process.env.VITE_OPENAI_API_KEY;
  
	async function sendMessage() {
	  if (!userMessage.trim()) return;
  
	  messages = [...messages, { content: userMessage, isUser: true }];
	  const userInput = userMessage;
	  userMessage = "";
	  isLoading = true;
  
	  try {
		const response = await fetch('https://api.openai.com/v1/chat/completions', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${API_KEY}`
		  },
		  body: JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages: [
						systemMessage, // 包含系统消息以设定角色
						...messages.map(msg => ({
							role: msg.isUser ? 'user' : 'assistant',
							content: msg.content
						})), // 用户和助手的消息记录
						{ role: 'user', content: userInput } // 新的用户输入
					],
			temperature: 0.7
		  })
		});
  
		if (!response.ok) {
		  const errorText = await response.text();
		  console.error(`Error ${response.status}: ${errorText}`);
		  throw new Error(`Error ${response.status}: ${response.statusText}`);
		}
  
		const data = await response.json();
		console.log('API Response:', data);
  
		const reply = data.choices?.[0]?.message?.content;
  
		if (reply) {
		  messages = [...messages, { content: reply, isUser: false }];
		} else {
		  throw new Error('API response is missing content.');
		}
	  } catch (error) {
		console.error('API Request Failed:', error);
		messages = [...messages, { content: "Sorry, something went wrong.", isUser: false }];
	  } finally {
		isLoading = false;
	  }
	}
  
	afterUpdate(() => {
	  if (messageListRef) {
		messageListRef.scrollTop = messageListRef.scrollHeight;
	  }
	});
  </script>
  
  <div class="chat-container">
	<div class="message-list" bind:this={messageListRef}>
	  {#each messages as msg, index (index)}
		<MessageBubble message={msg.content} isUser={msg.isUser} />
	  {/each}
	  {#if isLoading}
		<MessageBubble message="..." isUser={false} />
	  {/if}
	</div>
  
	<div class="input-container">
	  <input
		type="text"
		bind:value={userMessage}
		placeholder="Type a message..."
		on:keydown={(e) => e.key === 'Enter' && sendMessage()}
	  />
	  <button on:click={sendMessage} disabled={isLoading}>
		Send
	  </button>
	</div>
  </div>
  
  <style>
	.chat-container {
	  display: flex;
	  flex-direction: column;
	  justify-content: space-between;
	  height: 60%;
	  width: 80%;
	  border: 1px solid #ccc;
	  border-radius: 10px;
	  overflow: hidden;
	  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	  background-color: white;
	}
  
	.message-list {
	  flex: 1;
	  padding: 10px;
	  overflow-y: auto;
	  display: flex;
	  flex-direction: column;
	  gap: 5px;
	}
  
	.input-container {
	  display: flex;
	  border-top: 1px solid #eee;
	  padding: 10px;
	}
  
	input {
	  flex: 1;
	  padding: 8px;
	  border-radius: 5px;
	  border: 1px solid #ccc;
	  margin-right: 5px;
	}
  
	button {
	  padding: 8px 12px;
	  border: none;
	  border-radius: 5px;
	  background-color: #4caf50;
	  color: white;
	  cursor: pointer;
	}
  
	button:disabled {
	  background-color: #ccc;
	  cursor: not-allowed;
	}
  </style>
  