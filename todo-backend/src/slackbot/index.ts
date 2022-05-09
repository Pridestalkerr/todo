import { Activity, User, Todo } from "@prisma/client";
import { ChatPostMessageResponse, WebClient } from "@slack/web-api";
import Secrets from "secrets";

const slackBot = new WebClient(Secrets.SLACK_TOKEN);

export default {
  activityCreated: async (user: User, activity: Activity) => {
    const message: string = `User ${user.email} removed an activity: ${activity.title}\n \t ${activity.description}`;
    const slackLog: string = `Slack bot added an activity for user ${user.email}.\n\t${activity.title}`;

    const res: ChatPostMessageResponse = await slackBot.chat.postMessage({
      text: message,
      channel: Secrets.SLACK_CHANNEL,
    });
    console.log(slackLog);
  },

  activityDeleted: async (user: User, activity: Activity) => {
    const message: string = `User ${user.email} removed an activity: ${activity.title}`;
    const slackLog: string = `Slack bot removed an activity for user ${user.email}.\n\t${activity.title}`;

    const res: ChatPostMessageResponse = await slackBot.chat.postMessage({
      text: message,
      channel: Secrets.SLACK_CHANNEL,
    });
    console.log(slackLog);
  },

  activityStatus: async (user: User, activity: Activity) => {
    const message: string = `User ${user.email} completed all tasks in activity: ${activity.title}`;
    const slackLog: string = `Slack bot updated activity status for user ${user.email}.\n\t${activity.title}`;

    const res: ChatPostMessageResponse = await slackBot.chat.postMessage({
      text: message,
      channel: Secrets.SLACK_CHANNEL,
    });
    console.log(slackLog);
  },

  todoCreated: async (user: User, todo: Todo, activity: Activity) => {
    const message: string = `User "${user.email}" created a new todo "${todo.title}" in activity "${activity.title}"`;
    const slackLog: string = `Slack bot created a new todo in activity "${activity.title}" on behalf of user "${user.email}"`;

    const res: ChatPostMessageResponse = await slackBot.chat.postMessage({
      text: message,
      channel: Secrets.SLACK_CHANNEL,
    });
    console.log(slackLog);
  },

  todoDeleted: async (user: User, todo: Todo, activity: Activity) => {
    const message: string = `User "${user.email}" deleted a todo "${todo.title}" in activity "${activity.title}"`;
    const slackLog: string = `Slack bot deleted a todo "${todo.title}" in activity "${activity.title}" on behalf of user "${user.email}"`;

    const res: ChatPostMessageResponse = await slackBot.chat.postMessage({
      text: message,
      channel: Secrets.SLACK_CHANNEL,
    });
    console.log(slackLog);
  },

  todoStatus: async (user: User, todo: Todo, activity: Activity) => {
    const message: string = `User "${user.email}" updated status for todo "${todo.title}" in activity "${activity.title}"`;
    const slackLog: string = `Slack bot updated status for todo "${todo.title}" in activity "${activity.title}" on behalf of user "${user.email}"`;

    const res: ChatPostMessageResponse = await slackBot.chat.postMessage({
      text: message,
      channel: Secrets.SLACK_CHANNEL,
    });
    console.log(slackLog);
  },
};
