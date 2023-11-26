export type NotificationType = 'is-success' | 'is-danger' | 'is-warning';

export interface INotification {
    id: number,
    type: NotificationType,
    message: string,
}